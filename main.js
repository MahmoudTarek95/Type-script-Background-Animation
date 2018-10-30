"use strict";
var Cir = /** @class */ (function () {
    function Cir() {
        this.init();
    }
    Cir.prototype.draw = function () {
        var c = Splash.ctx;
        c.beginPath();
        c.fillStyle = this.c;
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        c.fill();
    };
    Cir.prototype.disappear = function () {
        this.r *= .99;
        if (this.r < .5) {
            this.init();
        }
    };
    Cir.prototype.init = function () {
        this.x = Math.floor(Math.random() * window.innerWidth);
        this.y = Math.floor(Math.random() * window.innerHeight);
        this.r = Math.random() * 20;
        this.c = Math.random() > .5 ? 'rgba(255,255,255,.9)' : 'rgba(255,255,255,.4)';
    };
    return Cir;
}());
var Splash = /** @class */ (function () {
    function Splash() {
        this.circles = new Array();
        this.init();
    }
    Splash.prototype.init = function () {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        Splash.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvas.style.background = 'rgb(50,100,150)';
        for (var i = 0; i < 500; i++) {
            this.circles.push(new Cir());
        }
    };
    Splash.prototype.animate = function () {
        Splash.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for (var i = 0; i < 500; i++) {
            this.circles[i].disappear();
            this.circles[i].draw();
        }
    };
    return Splash;
}());
window.addEventListener('load', function () {
    var s = new Splash();
    setInterval(function () {
        s.animate();
    }, 30);
});
