// file3_obf.js
(function(){
    const _0x1a2b=function(s){const c=["A","B","C","D","E"],d=[];for(let i=0;i<s;i++){d.push({id:i+1,value:Math.floor(Math.random()*1000),category:c[i%c.length],active:i%2===0});}return d;};
    const _0x2b3c=function(d){const r={};for(const i of d){r[i.category]||(r[i.category]=[]);r[i.category].push(i.value);}return r;};
    const _0x3c4d=function(a){if(!a.length)return {sum:0,avg:0,max:0,min:0};let s=0,m=-Infinity,n=Infinity;for(const v of a){s+=v;if(v>m)m=v;if(v<n)n=v;}return {sum:s,avg:s/a.length,max:m,min:n};};
    const _0x4d5e=function(g){const r={};for(const k in g)r[k]=_0x3c4d(g[k]);return r;};
    const _0x5e6f=function(d){let a=0,i=0;for(const x of d)x.active?a++:i++;return {active:a,inactive:i};};
    const _0x6f7g=function(d,t){return d.filter(x=>x.value>=t);};
    const _0x7g8h=function(d){return d.slice().sort((a,b)=>a.value-b.value);};
    const _0x8i9j=function(d){return d.slice().sort((a,b)=>a.category.localeCompare(b.category));};
    const _0x9j0k=function(d,id){return d.find(x=>x.id===id)||null;};

    const _0xrun=function(){
        const _d=_0x1a2b(200),
              _g=_0x2b3c(_d),
              _s=_0x4d5e(_g),
              _c=_0x5e6f(_d),
              _f=_0x6f7g(_d,500),
              _sv=_0x7g8h(_d),
              _sc=_0x8i9j(_d),
              _i=_0x9j0k(_d,42);

        console.log("Dataset size:",_d.length);
        console.log("Counts:",_c);
        console.log("Stats by category:",_s);
        console.log("Filtered (>=500) count:",_f.length);
        console.log("First 5 sorted by value:",_sv.slice(0,5));
        console.log("First 5 sorted by category:",_sc.slice(0,5));
        console.log("Item with ID 42:",_i);

        const _final=_d.length+_f.length+_c.active+_c.inactive;
        console.log("RESULT:",_final);
    };

    _0xrun();

    // Dummy helpers to pad lines (~500)
    for(let h=1;h<=30;h++) eval(`function helper${h}(){return Math.random();}`);
})();