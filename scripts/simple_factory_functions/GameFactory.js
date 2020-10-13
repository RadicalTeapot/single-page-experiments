var GameFactory = (()=>{
    'use strict';

    const FixedStepFrame = ({update, render}) => o => {
        let _gdt = 0;
        let _step = 1/60;
        let _last = null;
        let _now = null;
        let _dt = 0;
        let _frame = function(t) {
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
            requestAnimationFrame(_frame);
        };
        return {
            ...o,
            update,
            render,
            run: function() {
                _frame = _frame.bind(this);
                requestAnimationFrame(_frame);
            },
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
