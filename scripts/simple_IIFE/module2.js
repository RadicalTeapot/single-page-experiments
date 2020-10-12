var simpleIIFEModule2 = (()=>{
    'use strict';

    var publicVar = "Simple IIFE Module 2";
    var _privateVar = 20;
    const publicFunc = function() {
        _privateVar -= 10;
    };

    return {
        varOne: publicVar,
        getVarTwo: () => _privateVar,
        func: publicFunc,
    }
})();
