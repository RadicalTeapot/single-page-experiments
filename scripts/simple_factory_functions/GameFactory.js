var GameFactory = (()=>{
    'use strict';

    const FixedStepFrame = ({update, render}) => o => {
        var _gdt = 0;
        var _step = 1/60;
        var _last = null;
        var _now = null;
        var _dt = 0;
        return {
            ...o,
            update,
            render,
            frame: function(t) {
                _now = t;
                _last = _last || (t - _step * 1000);
                _dt = Math.min((_now - _last) / 1000, 1);
                _gdt += _dt;
                while (_gdt >= _dt) {
                    this.update();
                    _gdt -= _dt;
                }
                this.render();
                _last = _now;
            }
        };
    };

    const KeyboardHandling = o => {
        let lastKeyPressed = "";
        const keyDown = e => {
            lastKeyPressed = e.which.toString();
        };
        document.onkeydown = keyDown;
        return {
            ...o,
            getLastKeyPressed: () => lastKeyPressed,
        };
    };

    return {
        FixedStepFrame,
        KeyboardHandling,
    };
})();
