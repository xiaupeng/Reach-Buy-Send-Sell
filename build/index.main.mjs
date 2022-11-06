// Automatically generated with Reach 0.1.12 (af6530ae)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (af6530ae)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      3: [ctc0, ctc1, ctc1, ctc0],
      4: [ctc0, ctc1, ctc1, ctc0],
      6: [ctc0, ctc1, ctc1, ctc0, ctc0],
      7: [ctc0, ctc1, ctc1, ctc0, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v161, v162], secs: v164, time: v163, didSend: v29, from: v160 } = txn1;
  ;
  const v167 = stdlib.protect(ctc0, await interact.confirmPurchase(v161), {
    at: './index.rsh:58:62:application',
    fs: ['at ./index.rsh:57:9:application call to [unknown function] (defined at: ./index.rsh:57:13:function exp)'],
    msg: 'confirmPurchase',
    who: 'Buyer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v160, v161, v162, v167],
    evt_cnt: 1,
    funcNum: 1,
    lct: v163,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:62:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v169], secs: v171, time: v170, didSend: v38, from: v168 } = txn2;
      
      ;
      const v172 = stdlib.eq(v169, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, '0'));
      if (v172) {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v169], secs: v171, time: v170, didSend: v38, from: v168 } = txn2;
  ;
  const v172 = stdlib.eq(v169, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, '0'));
  if (v172) {
    stdlib.protect(ctc1, await interact.buyerCancellation(), {
      at: './index.rsh:67:52:application',
      fs: ['at ./index.rsh:67:9:application call to [unknown function] (defined at: ./index.rsh:67:23:function exp)'],
      msg: 'buyerCancellation',
      who: 'Buyer'
      });
    
    return;
    }
  else {
    const txn3 = await (ctc.sendrecv({
      args: [v160, v161, v162, v168],
      evt_cnt: 0,
      funcNum: 2,
      lct: v170,
      onlyIf: true,
      out_tys: [],
      pay: [v161, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v180, time: v179, didSend: v57, from: v178 } = txn3;
        
        sim_r.txns.push({
          amt: v161,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v180, time: v179, didSend: v57, from: v178 } = txn3;
    ;
    const v183 = stdlib.addressEq(v168, v178);
    stdlib.assert(v183, {
      at: './index.rsh:72:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    stdlib.protect(ctc1, await interact.reportPayment(v161, v169), {
      at: './index.rsh:73:49:application',
      fs: ['at ./index.rsh:73:9:application call to [unknown function] (defined at: ./index.rsh:73:24:function exp)'],
      msg: 'reportPayment',
      who: 'Buyer'
      });
    
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v191], secs: v193, time: v192, didSend: v75, from: v190 } = txn4;
    ;
    const v194 = stdlib.eq(v191, stdlib.checkedBigNumberify('./index.rsh:87:28:decimal', stdlib.UInt_max, '0'));
    if (v194) {
      ;
      stdlib.protect(ctc1, await interact.reportRejectDelivery(), {
        at: './index.rsh:90:66:application',
        fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:22:function exp)'],
        msg: 'reportRejectDelivery',
        who: 'Buyer'
        });
      
      return;
      }
    else {
      stdlib.protect(ctc1, await interact.reportAcceptDelivery(v162, v191), {
        at: './index.rsh:95:66:application',
        fs: ['at ./index.rsh:95:9:application call to [unknown function] (defined at: ./index.rsh:95:22:function exp)'],
        msg: 'reportAcceptDelivery',
        who: 'Buyer'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v160, v161, v162, v168, v190],
        evt_cnt: 0,
        funcNum: 4,
        lct: v192,
        onlyIf: true,
        out_tys: [],
        pay: [v162, []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v209, time: v208, didSend: v107, from: v207 } = txn5;
          
          sim_r.txns.push({
            amt: v162,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc0, ctc0, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v209, time: v208, didSend: v107, from: v207 } = txn5;
      ;
      const v212 = stdlib.addressEq(v168, v207);
      stdlib.assert(v212, {
        at: './index.rsh:96:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Buyer'
        });
      const v215 = stdlib.protect(ctc0, await interact.ackDelivery(), {
        at: './index.rsh:102:63:application',
        fs: ['at ./index.rsh:101:9:application call to [unknown function] (defined at: ./index.rsh:101:13:function exp)'],
        msg: 'ackDelivery',
        who: 'Buyer'
        });
      
      const txn6 = await (ctc.sendrecv({
        args: [v160, v161, v162, v168, v190, v215],
        evt_cnt: 1,
        funcNum: 5,
        lct: v208,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:105:5:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v217], secs: v219, time: v218, didSend: v117, from: v216 } = txn6;
          
          ;
          const v221 = stdlib.eq(v217, stdlib.checkedBigNumberify('./index.rsh:109:29:decimal', stdlib.UInt_max, '0'));
          if (v221) {
            sim_r.txns.push({
              kind: 'from',
              to: v168,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v168,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            
            sim_r.txns.push({
              kind: 'from',
              to: v190,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v160,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc0, ctc0, ctc2, ctc2, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [v217], secs: v219, time: v218, didSend: v117, from: v216 } = txn6;
      ;
      const v220 = stdlib.addressEq(v168, v216);
      stdlib.assert(v220, {
        at: './index.rsh:105:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Buyer'
        });
      const v221 = stdlib.eq(v217, stdlib.checkedBigNumberify('./index.rsh:109:29:decimal', stdlib.UInt_max, '0'));
      if (v221) {
        ;
        ;
        return;
        }
      else {
        stdlib.protect(ctc1, await interact.reportOrderReceived(v217, v161, v162), {
          at: './index.rsh:117:65:application',
          fs: ['at ./index.rsh:117:9:application call to [unknown function] (defined at: ./index.rsh:117:22:function exp)'],
          msg: 'reportOrderReceived',
          who: 'Buyer'
          });
        
        ;
        ;
        return;
        }
      
      
      
      }
    
    
    
    }
  
  
  
  };
export async function Seller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const v158 = stdlib.protect(ctc0, await interact.getSellprice(), {
    at: './index.rsh:45:55:application',
    fs: ['at ./index.rsh:44:9:application call to [unknown function] (defined at: ./index.rsh:44:13:function exp)'],
    msg: 'getSellprice',
    who: 'Seller'
    });
  const v159 = stdlib.protect(ctc0, await interact.getTprice(), {
    at: './index.rsh:46:49:application',
    fs: ['at ./index.rsh:44:9:application call to [unknown function] (defined at: ./index.rsh:44:13:function exp)'],
    msg: 'getTprice',
    who: 'Seller'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v158, v159],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:50:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:50:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v161, v162], secs: v164, time: v163, didSend: v29, from: v160 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v161, v162], secs: v164, time: v163, didSend: v29, from: v160 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v169], secs: v171, time: v170, didSend: v38, from: v168 } = txn2;
  ;
  const v172 = stdlib.eq(v169, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, '0'));
  if (v172) {
    stdlib.protect(ctc1, await interact.buyerCancellation(), {
      at: './index.rsh:67:52:application',
      fs: ['at ./index.rsh:67:9:application call to [unknown function] (defined at: ./index.rsh:67:23:function exp)'],
      msg: 'buyerCancellation',
      who: 'Seller'
      });
    
    return;
    }
  else {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v180, time: v179, didSend: v57, from: v178 } = txn3;
    ;
    const v183 = stdlib.addressEq(v168, v178);
    stdlib.assert(v183, {
      at: './index.rsh:72:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Seller'
      });
    stdlib.protect(ctc1, await interact.reportPayment(v161, v169), {
      at: './index.rsh:73:49:application',
      fs: ['at ./index.rsh:73:9:application call to [unknown function] (defined at: ./index.rsh:73:24:function exp)'],
      msg: 'reportPayment',
      who: 'Seller'
      });
    
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v191], secs: v193, time: v192, didSend: v75, from: v190 } = txn4;
    ;
    const v194 = stdlib.eq(v191, stdlib.checkedBigNumberify('./index.rsh:87:28:decimal', stdlib.UInt_max, '0'));
    if (v194) {
      ;
      stdlib.protect(ctc1, await interact.reportRejectDelivery(), {
        at: './index.rsh:90:66:application',
        fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:22:function exp)'],
        msg: 'reportRejectDelivery',
        who: 'Seller'
        });
      
      return;
      }
    else {
      stdlib.protect(ctc1, await interact.reportAcceptDelivery(v162, v191), {
        at: './index.rsh:95:66:application',
        fs: ['at ./index.rsh:95:9:application call to [unknown function] (defined at: ./index.rsh:95:22:function exp)'],
        msg: 'reportAcceptDelivery',
        who: 'Seller'
        });
      
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v209, time: v208, didSend: v107, from: v207 } = txn5;
      ;
      const v212 = stdlib.addressEq(v168, v207);
      stdlib.assert(v212, {
        at: './index.rsh:96:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Seller'
        });
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v217], secs: v219, time: v218, didSend: v117, from: v216 } = txn6;
      ;
      const v220 = stdlib.addressEq(v168, v216);
      stdlib.assert(v220, {
        at: './index.rsh:105:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Seller'
        });
      const v221 = stdlib.eq(v217, stdlib.checkedBigNumberify('./index.rsh:109:29:decimal', stdlib.UInt_max, '0'));
      if (v221) {
        ;
        ;
        return;
        }
      else {
        stdlib.protect(ctc1, await interact.reportOrderReceived(v217, v161, v162), {
          at: './index.rsh:117:65:application',
          fs: ['at ./index.rsh:117:9:application call to [unknown function] (defined at: ./index.rsh:117:22:function exp)'],
          msg: 'reportOrderReceived',
          who: 'Seller'
          });
        
        ;
        ;
        return;
        }
      
      
      
      }
    
    
    
    }
  
  
  
  };
export async function Transport(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Transport expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Transport expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v161, v162], secs: v164, time: v163, didSend: v29, from: v160 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v169], secs: v171, time: v170, didSend: v38, from: v168 } = txn2;
  ;
  const v172 = stdlib.eq(v169, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, '0'));
  if (v172) {
    stdlib.protect(ctc1, await interact.buyerCancellation(), {
      at: './index.rsh:67:52:application',
      fs: ['at ./index.rsh:67:9:application call to [unknown function] (defined at: ./index.rsh:67:23:function exp)'],
      msg: 'buyerCancellation',
      who: 'Transport'
      });
    
    return;
    }
  else {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v180, time: v179, didSend: v57, from: v178 } = txn3;
    ;
    const v183 = stdlib.addressEq(v168, v178);
    stdlib.assert(v183, {
      at: './index.rsh:72:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Transport'
      });
    stdlib.protect(ctc1, await interact.reportPayment(v161, v169), {
      at: './index.rsh:73:49:application',
      fs: ['at ./index.rsh:73:9:application call to [unknown function] (defined at: ./index.rsh:73:24:function exp)'],
      msg: 'reportPayment',
      who: 'Transport'
      });
    
    const v189 = stdlib.protect(ctc0, await interact.confirmDelivery(v162), {
      at: './index.rsh:79:66:application',
      fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:13:function exp)'],
      msg: 'confirmDelivery',
      who: 'Transport'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v160, v161, v162, v168, v189],
      evt_cnt: 1,
      funcNum: 3,
      lct: v179,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:83:5:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v191], secs: v193, time: v192, didSend: v75, from: v190 } = txn4;
        
        ;
        const v194 = stdlib.eq(v191, stdlib.checkedBigNumberify('./index.rsh:87:28:decimal', stdlib.UInt_max, '0'));
        if (v194) {
          sim_r.txns.push({
            kind: 'from',
            to: v168,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.isHalt = false;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc0, ctc2, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v191], secs: v193, time: v192, didSend: v75, from: v190 } = txn4;
    ;
    const v194 = stdlib.eq(v191, stdlib.checkedBigNumberify('./index.rsh:87:28:decimal', stdlib.UInt_max, '0'));
    if (v194) {
      ;
      stdlib.protect(ctc1, await interact.reportRejectDelivery(), {
        at: './index.rsh:90:66:application',
        fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:22:function exp)'],
        msg: 'reportRejectDelivery',
        who: 'Transport'
        });
      
      return;
      }
    else {
      stdlib.protect(ctc1, await interact.reportAcceptDelivery(v162, v191), {
        at: './index.rsh:95:66:application',
        fs: ['at ./index.rsh:95:9:application call to [unknown function] (defined at: ./index.rsh:95:22:function exp)'],
        msg: 'reportAcceptDelivery',
        who: 'Transport'
        });
      
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v209, time: v208, didSend: v107, from: v207 } = txn5;
      ;
      const v212 = stdlib.addressEq(v168, v207);
      stdlib.assert(v212, {
        at: './index.rsh:96:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Transport'
        });
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v217], secs: v219, time: v218, didSend: v117, from: v216 } = txn6;
      ;
      const v220 = stdlib.addressEq(v168, v216);
      stdlib.assert(v220, {
        at: './index.rsh:105:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Transport'
        });
      const v221 = stdlib.eq(v217, stdlib.checkedBigNumberify('./index.rsh:109:29:decimal', stdlib.UInt_max, '0'));
      if (v221) {
        ;
        ;
        return;
        }
      else {
        stdlib.protect(ctc1, await interact.reportOrderReceived(v217, v161, v162), {
          at: './index.rsh:117:65:application',
          fs: ['at ./index.rsh:117:9:application call to [unknown function] (defined at: ./index.rsh:117:22:function exp)'],
          msg: 'reportOrderReceived',
          who: 'Transport'
          });
        
        ;
        ;
        return;
        }
      
      
      
      }
    
    
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByALAAEgKAMEBQgHBgImAgEAACI1ADEYQQMZKWRJIls1ASEHWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAYBJIQUMQAEASSEGDEAAkyEGEkQhCDQBEkQ0BEkiEkw0AhIRRChkSTUDSUkkWzX/JVs1/lcwIDX9STUFFzX8gASBqprPNPwWULA0/TEAEkQ0/CISQQAjsSKyATT+sggjshA0/bIHs7EisgE0/7III7IQNP2yB7NCAiKxIrIBNP6yCCOyEDQDV1AgsgezsSKyATT/sggjshA0A1cAILIHs0IB+UghCTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8kWzX+JVs1/VcwIDX8V1AgNfuABJEnNPOwNP2IAio0/DEAEkQ0/zT+FlA0/RZQNPxQNPtQKEsBVwBwZ0ghCDUBMgY1AkIBr0ghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yRbNf4lWzX9VzAgNfxJNQUXNfuABNQMbNY0+xZQsDT7IhJBABOxIrIBNP6yCCOyEDT8sgezQgE9NP80/hZQNP0WUDT8UDEAUChLAVcAcGdIIQk1ATIGNQJCATZJIwxAAMRJIQoMQABdSCEENAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JFs1/iVbNf1XMCA1/IAEQbFATbA0/ogBRDT8MQASRDT/NP4WUDT9FlA0/FAoSwFXAFBnSCEFNQEyBjUCQgDMSCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8kWzX+JVs1/Uk1BRc1/IAE1RUZFDT8FlCwNPwiEkEAA0IAcDT/NP4WUDT9FlAxAFAoSwFXAFBnSCEENQEyBjUCQgBsSIGgjQaIALYiNAESRDQESSISTDQCEhFESTUFSSJbNf8hB1s1/oAErNEfwzT/FlA0/hZQsDEANP8WUDT+FlAoSwFXADBnSCM1ATIGNQJCABwxGSEGEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQoxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v161",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v162",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v161",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v162",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v169",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v191",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v217",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v169",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v191",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v217",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620012523803806200125283398101604081905262000026916200022e565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b3415600762000127565b620000b9604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200011e92600292019062000151565b505050620002cb565b816200014d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200015f906200028e565b90600052602060002090601f016020900481019282620001835760008555620001ce565b82601f106200019e57805160ff1916838001178555620001ce565b82800160010185558215620001ce579182015b82811115620001ce578251825591602001919060010190620001b1565b50620001dc929150620001e0565b5090565b5b80821115620001dc5760008155600101620001e1565b604080519081016001600160401b03811182821017156200022857634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024257600080fd5b6200024c620001f7565b835181526040601f19830112156200026357600080fd5b6200026d620001f7565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002a357607f821691505b60208210811415620002c557634e487b7160e01b600052602260045260246000fd5b50919050565b610f7780620002db6000396000f3fe6080604052600436106100795760003560e01c8063873779a11161004b578063873779a1146100e1578063a7661d54146100f4578063ab53f2c614610107578063f4cedab01461012a57005b80631e93b0f114610082578063552d7b8e146100a65780637eea518c146100b957806383230757146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610c18565b61013d565b6100806100c7366004610c18565b610392565b3480156100d857600080fd5b50600154610093565b6100806100ef366004610c18565b610542565b610080610102366004610c18565b6106ba565b34801561011357600080fd5b5061011c610861565b60405161009d929190610c3b565b610080610138366004610c18565b6108fe565b61014d6007600054146018610acb565b6101678135158061016057506001548235145b6019610acb565b60008080556002805461017990610c98565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610c98565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610ce9565b90507f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d3338360405161023d929190610d77565b60405180910390a161025134156016610acb565b606081015161026c906001600160a01b031633146017610acb565b60208201356103135780606001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f193505050501580156102b6573d6000803e3d6000fd5b5080606001516001600160a01b03166108fc82602001519081150290604051600060405180830381858888f193505050501580156102f8573d6000803e3d6000fd5b506000808055600181905561030f90600290610af0565b5050565b80608001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f19350505050158015610354573d6000803e3d6000fd5b50805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156102f8573d6000803e3d6000fd5b6103a2600360005414600d610acb565b6103bc813515806103b557506001548235145b600e610acb565b6000808055600280546103ce90610c98565b80601f01602080910402602001604051908101604052809291908181526020018280546103fa90610c98565b80156104475780601f1061041c57610100808354040283529160200191610447565b820191906000526020600020905b81548152906001019060200180831161042a57829003601f168201915b505050505080602001905181019061045f9190610d9e565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610492929190610e1b565b60405180910390a16104ab81602001513414600b610acb565b60608101516104c6906001600160a01b03163314600c610acb565b6104ce610b2d565b81516001600160a01b039081168252602080840151818401526040808501518185015260608086015190931692840192909252600460005543600155905161051891839101610e58565b6040516020818303038152906040526002908051906020019061053c929190610b67565b50505050565b6105526001600054146009610acb565b61056c8135158061056557506001548235145b600a610acb565b60008080556002805461057e90610c98565b80601f01602080910402602001604051908101604052809291908181526020018280546105aa90610c98565b80156105f75780601f106105cc576101008083540402835291602001916105f7565b820191906000526020600020905b8154815290600101906020018083116105da57829003601f168201915b505050505080602001905181019061060f9190610e8f565b90507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72253383604051610642929190610d77565b60405180910390a161065634156008610acb565b6020820135610675576000808055600181905561030f90600290610af0565b61067d610b2d565b81516001600160a01b0316815260208083015181830152604080840151818401523360608401526003600055436001555161051891839101610e58565b6106ca6006600054146014610acb565b6106e4813515806106dd57506001548235145b6015610acb565b6000808055600280546106f690610c98565b80601f016020809104026020016040519081016040528092919081815260200182805461072290610c98565b801561076f5780601f106107445761010080835404028352916020019161076f565b820191906000526020600020905b81548152906001019060200180831161075257829003601f168201915b50505050508060200190518101906107879190610ce9565b90507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233836040516107ba929190610e1b565b60405180910390a16107d3816040015134146012610acb565b60608101516107ee906001600160a01b031633146013610acb565b6040805160a08101825260008082526020808301828152838501838152606080860185815260808088018781528a516001600160a01b039081168a528b8801519096528a8a0151909452918901518416905287015190911690526007909155436001559151909161051891839101610efe565b60006060600054600280805461087690610c98565b80601f01602080910402602001604051908101604052809291908181526020018280546108a290610c98565b80156108ef5780601f106108c4576101008083540402835291602001916108ef565b820191906000526020600020905b8154815290600101906020018083116108d257829003601f168201915b50505050509050915091509091565b61090e6004600054146010610acb565b6109288135158061092157506001548235145b6011610acb565b60008080556002805461093a90610c98565b80601f016020809104026020016040519081016040528092919081815260200182805461096690610c98565b80156109b35780601f10610988576101008083540402835291602001916109b3565b820191906000526020600020905b81548152906001019060200180831161099657829003601f168201915b50505050508060200190518101906109cb9190610d9e565b90507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc133836040516109fe929190610d77565b60405180910390a1610a123415600f610acb565b6020820135610a5c5780606001516001600160a01b03166108fc82602001519081150290604051600060405180830381858888f193505050501580156102f8573d6000803e3d6000fd5b6040805160a0810182526000808252602080830182815283850183815260608086018581526080870186815289516001600160a01b0390811689528a87015190955289890151909352908801519092169091523390526006909155436001559151909161051891839101610efe565b8161030f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610afc90610c98565b6000825580601f10610b0c575050565b601f016020900490600052602060002090810190610b2a9190610beb565b50565b604051806080016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681525090565b828054610b7390610c98565b90600052602060002090601f016020900481019282610b955760008555610bdb565b82601f10610bae57805160ff1916838001178555610bdb565b82800160010185558215610bdb579182015b82811115610bdb578251825591602001919060010190610bc0565b50610be7929150610beb565b5090565b5b80821115610be75760008155600101610bec565b600060408284031215610c1257600080fd5b50919050565b600060408284031215610c2a57600080fd5b610c348383610c00565b9392505050565b82815260006020604081840152835180604085015260005b81811015610c6f57858101830151858201606001528201610c53565b81811115610c81576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610cac57607f821691505b60208210811415610c1257634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610ce457600080fd5b919050565b600060a08284031215610cfb57600080fd5b60405160a0810181811067ffffffffffffffff82111715610d2c57634e487b7160e01b600052604160045260246000fd5b604052610d3883610ccd565b81526020830151602082015260408301516040820152610d5a60608401610ccd565b6060820152610d6b60808401610ccd565b60808201529392505050565b6001600160a01b038316815260608101610c34602083018480358252602090810135910152565b600060808284031215610db057600080fd5b6040516080810181811067ffffffffffffffff82111715610de157634e487b7160e01b600052604160045260246000fd5b604052610ded83610ccd565b81526020830151602082015260408301516040820152610e0f60608401610ccd565b60608201529392505050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610e4957600080fd5b80604085015250509392505050565b81516001600160a01b0390811682526020808401519083015260408084015190830152606092830151169181019190915260800190565b600060608284031215610ea157600080fd5b6040516060810181811067ffffffffffffffff82111715610ed257634e487b7160e01b600052604160045260246000fd5b604052610ede83610ccd565b815260208301516020820152604083015160408201528091505092915050565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151821690830152608092830151169181019190915260a0019056fea26469706673582212202b8c97d0bfdb2c7fed1c228a65e086cac139ef80ed6b3d416122472f80b1fe3264736f6c634300080c0033`,
  BytecodeLen: 4690,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:54:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:66:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:71:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:74:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:89:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:94:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:97:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:113:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:120:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Buyer": Buyer,
  "Seller": Seller,
  "Transport": Transport
  };
export const _APIs = {
  };
