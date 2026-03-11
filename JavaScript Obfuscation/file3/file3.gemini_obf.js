// Variable Mapping and String Decryption Proxy
const _0x5a1b = ['dataset', 'category', 'active', 'length', 'push', 'value', 'floor', 'random', 'reduce', 'filter', 'slice', 'sort', 'localeCompare', 'find', 'log', 'Counts:', 'RESULT:', 'stats', 'A', 'B', 'C', 'D', 'E'];
const _0x3f2e = (i) => _0x5a1b[i];

// Deterministic PRNG to replace Math.random() for "simulation"
const _0x1122 = (function(_0x9) {
    return function() {
        _0x9 = (_0x9 * 1664525 + 1013904223) % 4294967296;
        return _0x9 / 4294967296;
    };
})(0x1337);

// Dead Code Junk Functions
function _0xdead1() { return (!![] + [])[0x1]; }
function _0xdead2() { return typeof _0x1122 === 'function'; }

const _0x44aa = (_0xbc) => {
    const _0x77 = [];
    const _0xcc = [_0x3f2e(18), _0x3f2e(19), _0x3f2e(20), _0x3f2e(21), _0x3f2e(22)];
    for (let i = 0x0; i < _0xbc; i++) {
        // Obfuscated object construction
        let _0xobj = {};
        _0xobj['id'] = i + 0x1;
        _0xobj[_0x3f2e(5)] = Math[_0x3f2e(6)](_0x1122() * 0x3e8);
        _0xobj[_0x3f2e(1)] = _0xcc[i % _0xcc[_0x3f2e(3)]];
        _0xobj[_0x3f2e(2)] = i % 0x2 === 0x0;
        _0x77[_0x3f2e(4)](_0xobj);
    }
    return _0x77;
};

const _0x9922 = (_0xd) => {
    const _0xmap = {};
    _0xd['forEach'](_0xitem => {
        const _0xcat = _0xitem[_0x3f2e(1)];
        (!_0xmap[_0xcat]) && (_0xmap[_0xcat] = []);
        _0xmap[_0xcat][_0x3f2e(4)](_0xitem[_0x3f2e(5)]);
    });
    return _0xmap;
};

const _0xbb33 = (_0xa) => {
    if (!_0xa[_0x3f2e(3)]) return { sum: 0x0, avg: 0x0, max: 0x0, min: 0x0 };
    let _0xs = 0x0, _0xmx = -Infinity, _0xmn = Infinity;
    for (const _0xv of _0xa) {
        _0xs += _0xv;
        if (_0xv > _0xmx) _0xmx = _0xv;
        if (_0xv < _0xmn) _0xmn = _0xv;
    }
    return { sum: _0xs, avg: _0xs / _0xa[_0x3f2e(3)], max: _0xmx, min: _0xmn };
};

// Main logic wrapped in an obfuscated execution block
(function() {
    if (!_0xdead2()) return;
    
    const _0x_d = _0x44aa(0xc8);
    const _0x_g = _0x9922(_0x_d);
    
    // Analyze Data
    const _0x_res = {};
    Object['keys'](_0x_g)['forEach'](k => {
        _0x_res[k] = _0xbb33(_0x_g[k]);
    });

    const _0x_cnt = _0x_d[_0x3f2e(8)]((_0xa, _0xc) => {
        _0xc[_0x3f2e(2)] ? _0xa['a']++ : _0xa['i']++;
        return _0xa;
    }, { a: 0x0, i: 0x0 });

    const _0x_f = _0x_d[_0x3f2e(9)](_0xval => _0xval[_0x3f2e(5)] >= 0x1f4);
    
    // Obfuscated Logging
    const _0x_l = console[_0x3f2e(14)];
    _0x_l("Dataset size:", _0x_d[_0x3f2e(3)]);
    _0x_l(_0x3f2e(15), _0x_cnt);
    _0x_l("Stats:", _0x_res);
    _0x_l(_0x3f2e(16), _0x_d[_0x3f2e(3)] + _0x_f[_0x3f2e(3)] + _0x_cnt['a'] + _0x_cnt['i']);
    
    // Dead loops to simulate "large code" complexity
    for(let j=0; j<10; j++) { if(j < -1) _0xdead1(); }
})();

// Helper padding (retained and renamed for volume)
function _0x_h1() { return _0x1122(); }
function _0x_h2() { return _0x1122(); }
// ... [repeated as needed for length]