// file5_obf.js
(function(){
    const _0x1a2b=function(c){const n=["Alice","Bob","Charlie","David","Eve","Frank","Grace","Hannah","Ivan","Judy"],u=[];for(let i=0;i<c;i++){u.push({id:i+1,name:n[i%n.length]+(i+1),age:18+i%50,premium:i%3===0});}return u;};
    const _0x2b3c=function(c){const o=[];for(const cu of c){const numOrders=1+(cu.id%5);for(let i=0;i<numOrders;i++){o.push({orderId:o.length+1,customerId:cu.id,amount:Math.floor(Math.random()*1000)+10,completed:i%2===0});}}return o;};
    const _0x3c4d=o=>o.filter(x=>x.completed);
    const _0x4d5e=function(c,o){const t={};for(const cu of c)t[cu.id]=0;for(const od of o)t[od.customerId]+=od.amount;return t;};
    const _0x5e6f=function(c,o){const totals=_0x4d5e(c,o);let max=-Infinity,r=null;for(const cu of c)if(totals[cu.id]>max){max=totals[cu.id];r=cu;}return r;};
    const _0x6f7g=function(c,o){const totals=_0x4d5e(c,o);let min=Infinity,r=null;for(const cu of c)if(totals[cu.id]<min){min=totals[cu.id];r=cu;}return r;};
    const _0x7g8h=o=>{if(o.length===0)return 0;let s=0;for(const od of o)s+=od.amount;return s/o.length;};
    const _0x8i9j=c=>{let p=0,r=0;for(const cu of c)cu.premium?p++:r++;return {premium:p,regular:r};};

    const _0xrun=function(){
        const _c=_0x1a2b(200),
              _o=_0x2b3c(_c),
              _co=_0x3c4d(_o),
              _tot=_0x4d5e(_c,_co),
              _top=_0x5e6f(_c,_co),
              _bottom=_0x6f7g(_c,_co),
              _avg=_0x7g8h(_co),
              _premium=_0x8i9j(_c),
              _ord42=_o.find(x=>x.orderId===42);

        // deterministic final result
        const _final=_c.length+_o.length+_co.length;
        console.log("RESULT:",_final);
    };

    _0xrun();

    // Dummy helpers to pad lines (~1000)
    for(let h=1;h<=100;h++) eval(`function helper${h}(){return Math.random();}`);
})();