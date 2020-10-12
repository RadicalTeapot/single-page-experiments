var simpleIIFEModule1 = (()=>{
    'use strict';

    var publicVar = "Simple IIFE Module 1";
    var _privateVar = 10;
    const publicFunc = function() {
        _privateVar += 10;
    };

    return {
        varOne: publicVar,
        getVarTwo: () => _privateVar,
        func: publicFunc,
    }
})();
