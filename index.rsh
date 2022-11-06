'reach 0.1';

// Setup common functions
const commonInteract = {
  transportCancellation: Fun([], Null),
  buyerCancellation: Fun([], Null),
  reportOrderReceived: Fun([UInt, UInt, UInt], Null),
  reportPayment: Fun([UInt, UInt],Null),
  reportAcceptDelivery: Fun([UInt, UInt], Null),
  reportRejectDelivery:Fun([], Null)
};

// functions related to seller
const sellerInteract = {
  ...commonInteract,
  getSellprice: Fun([], UInt),
  getTprice: Fun([], UInt),
  //productReady: Fun([UInt, UInt], Null),
};

// functions related to buyer
const buyerInteract = {
  ...commonInteract,
  confirmPurchase: Fun([UInt], UInt),
  ackDelivery: Fun([], UInt),
};

// functions related to transport
const transportInteract = {
  ...commonInteract,
  confirmDelivery: Fun([UInt], UInt),
};


export const main = Reach.App(() => {
  // Setup all participants
  const S = Participant('Seller', sellerInteract);
  const B = Participant('Buyer', buyerInteract);
  const T = Participant('Transport', transportInteract);

  init();

  // Local steps , default variables are private. use declassify()
  S.only(() => { 
    const sellPrice = declassify(interact.getSellprice() ); 
    const tPrice = declassify(interact.getTprice() ); 
  });

  // Send sellPrice and tPrice to smart contract 
  S.publish(sellPrice, tPrice);

  // Call the frontend function ( interact.funcName ) productReady(sellPrice, tPrice)
  //S.interact.productReady(sellPrice, tPrice);
  commit();

  // Pass control to Buyer role, after it attached to the contract
  B.only(() => {     
    const purchasetime = declassify( interact.confirmPurchase(sellPrice) ); 
  });

  // Send result of willBuy to smart contract for participants to use
  B.publish(purchasetime);

  // if answer, no , send notice and exit
  if (purchasetime == 0) {
    commit();
    each([S,B, T], () => interact.buyerCancellation());
    exit();
  } else {
    // if answer yes, buyer pay to contract and send reportPayment to every participants
    commit();
    B.pay(sellPrice);
    each([S, B, T], () => interact.reportPayment(sellPrice, purchasetime));
    commit();
  }

  // Pass control to Transport, asking to accept delivery with tPrice
  T.only(() => { 
    const accepteliverTime = declassify( interact.confirmDelivery(tPrice) ); 
  });

  // Send result of willDeliver to smart contract for participants to use
  T.publish(accepteliverTime);

  // if answer no, transfer fund from smart contract back to Buyer and exit
  // Cannot leave any extra funds in smart contract before exit
  if ( accepteliverTime == 0 ) {
    transfer(sellPrice).to(B);
    commit();
    each([S,B,T], () => declassify( interact.reportRejectDelivery()) );
    exit();
  } else {
    // Send accept delivery report to all and Buyer pays tPrice to contract
    commit();
    each([S,B,T], () => declassify( interact.reportAcceptDelivery(tPrice, accepteliverTime)) );
    B.pay(tPrice);
    commit();
  }

  // Final step, ask Buyer to acknowledge delivery order
  B.only(() => { 
    const orderreceivedTime = declassify( interact.ackDelivery() ); 
  });

  B.publish(orderreceivedTime)

  // Buyer does not ack delivery, return funds to Buyer and exit, this is a simplified version 
  // In actual situation, T will confirm delivery with proof instead of B or use an oracle
  if ( orderreceivedTime == 0 ) {
    // revert payment to buy
    transfer(tPrice).to(B);
    transfer(sellPrice).to(B);
    commit();
    exit();
  } else {
    // Buyer ack the delivery, transfer payment to S & T, contract ends
    each([S,B,T], () => declassify( interact.reportOrderReceived(orderreceivedTime, sellPrice, tPrice) ));
    transfer(tPrice).to(T);
    transfer(sellPrice).to(S);
    commit();
  }

  exit();

  });



