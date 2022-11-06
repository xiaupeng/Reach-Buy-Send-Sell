import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask } from '@reach-sh/stdlib';

const stdlib = loadStdlib(process.env);
console.log(`The consensus network is ${stdlib.connector}.`);

//const startingBalance = stdlib.parseCurrency(100);

if (process.argv.length < 3 || ['s', 'b', 't'].includes(process.argv[2]) == false) {
  console.log('Usage: reach run index [s|b|t]');
  process.exit(0);
}
const role = process.argv[2];

const suStr = stdlib.standardUnit;
 
// The standard unit is ALGO, we deal with this unit
// The atomic unit is μALGO, blockchain delas with this unit
const toAU = (su) => stdlib.parseCurrency(su);
const toSU = (au) => stdlib.formatCurrency(au, 4);
const iBalance = toAU(1000);
const showBalance = async (acc) => console.log(`Your balance is ${toSU(await stdlib.balanceOf(acc))} ${suStr}.`);

// All common functions shared by all defined here
const commonInteract = {
  transpotCancellation: () => { console.log(`The job was refused.`); },
  buyerCancellation: () => { console.log(`The buyer cancelled the order.`); },
  reportPayment: (payment) => { console.log(`The buyer have made payment of ${toSU(payment)} ${suStr} to the contract`) },
  reportAcceptDelivery: () => { console.log(`The transporter have accepted the delivery.`) },
  reportRejectDelivery: () => { console.log(`The transporter have rejected the delivery, exiting...`) },
  reportOrderReceived: () => { console.log(`The order have been delivered, exiting...`) },
};

console.log(`Your role is ${role}`);

// Seller
if (role === 's') {
    const sellerInteract = {
    ...commonInteract,
    // All functions and variables are created here but called from backend 
    sellPrice: toAU(5),
    tPrice: toAU(2),
    
    // this function is called from backend ( S.interact.productReady(sellPrice, tPrice) )
    // to display the selling price and transport price and contract info ( ctc.getInfo() )
    productReady: async (sellPrice, tPrice) => {
      console.log(`Your selling price is ${toSU(sellPrice)} ${suStr}.`);
      console.log(`Your transpot price is ${toSU(tPrice)} ${suStr}.`);
      console.log(`Contract info: ${JSON.stringify(await ctc.getInfo())}`);
      } 
    }

    // create new test account with 1000 ALGO
    const acc = await stdlib.newTestAccount(iBalance);
    await showBalance(acc);

    // First participant, deploy the contract
    const ctc = acc.contract(backend);

    // seller interaction
    await ctc.p.Seller(sellerInteract);
    await showBalance(acc);
    
  } else if ( role === 'b') {
    const buyerInteract = {
      ...commonInteract,
      // All functions are created here but called from backend 

      // this is called from backend B.only() => const willBuy = declassify( interact.confirmPurchase(sellPrice) )
      confirmPurchase: async (sellPrice) => await ask.ask( `Do you want to purchase this for ${toSU(sellPrice)} ${suStr}?`, ask.yesno ),
      ackDelivery: async () => await ask.ask( `Confirm order received ?`, ask.yesno ),
    }

    const acc = await stdlib.newTestAccount(iBalance);
    const info = await ask.ask('Paste contract info:', (s) => JSON.parse(s));

    // Other participants, attached the contract from seller
    const ctc = acc.contract(backend, info);
    await showBalance(acc);

    // buyer interaction
    await ctc.p.Buyer(buyerInteract);
    await showBalance(acc);

  } else if ( role === 't' ) {
    const transpotInteract = {
      ...commonInteract,
      // All functions are created here but called from backend 
      confirmDelivery: async (tPrice) => ask.ask( `Do you want to deliver this for ${toSU(tPrice)} ${suStr}?`, ask.yesno ),
    }

  const acc = await stdlib.newTestAccount(iBalance);
  const info = await ask.ask('Paste contract info:', (s) => JSON.parse(s));

  // Other participants, attached the contract from seller
  const ctc = acc.contract(backend, info);
  await showBalance(acc);

  // transport interaction
  await ctc.p.Transpot(transpotInteract);
  await showBalance(acc);

  }
  
  ask.done();

