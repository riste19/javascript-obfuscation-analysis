// file2_obf.js
(function(){
    const _0x1a2b = function(count){
        const _0xnames=["Alice","Bob","Charlie","David","Eve","Frank","Grace","Hannah","Ivan","Judy"], _0xusers=[];
        for(let _0i=0;_0i<count;_0i++){
            const _0name=_0xnames[_0i%_0xnames.length]+_0i, _0age=18+(_0i%50), _0active=_0i%2===0;
            _0xusers.push({id:_0i+1,name:_0name,age:_0age,active:_0active});
        }
        return _0xusers;
    };

    const _0x2b3c = u=>u.filter(_=>_.active);
    const _0x3c4d = u=>u.length===0?0:u.reduce((s,_)=>s+_.age,0)/u.length;

    const _0x4d5e = function(u){
        let m=-Infinity, o=null;
        for(let _ of u) if(_.age>m){m=_.age;o=_;}
        return o;
    };

    const _0x5e6f = function(u){
        let m=Infinity, y=null;
        for(let _ of u) if(_.age<m){m=_.age;y=_;}
        return y;
    };

    const _0x6f7g = function(u){
        let a=0, i=0;
        for(let _ of u) _.active?a++:i++;
        return {activeCount:a,inactiveCount:i};
    };

    const _0x7g8h = u=>u.slice().sort((a,b)=>a.age-b.age);
    const _0x8i9j = u=>u.slice().sort((a,b)=>a.name.localeCompare(b.name));
    const _0x9j0k = (u,id)=>u.find(_=>_.id===id)||null;

    const _0xrun = function(){
        const _u=_0x1a2b(100),
              _au=_0x2b3c(_u),
              _avg=_0x3c4d(_au),
              _old=_0x4d5e(_au),
              _yng=_0x5e6f(_au),
              _cnt=_0x6f7g(_u),
              _sAge=_0x7g8h(_au),
              _sName=_0x8i9j(_au),
              _fId=_0x9j0k(_u,42);

        console.log("Active users:",_au.length);
        console.log("Average age:",_avg);
        console.log("Oldest:",_old?_old.name:"N/A",_old?_old.age:"");
        console.log("Youngest:",_yng?_yng.name:"N/A",_yng?_yng.age:"");
        console.log("Counts:",_cnt);
        console.log("First 5 users sorted by age:",_sAge.slice(0,5));
        console.log("First 5 users sorted by name:",_sName.slice(0,5));
        console.log("User with ID 42:",_fId);

        const _final=_au.length+Math.round(_avg)+_cnt.activeCount+_cnt.inactiveCount;
        console.log("RESULT:",_final);
    };

    _0xrun();
})();