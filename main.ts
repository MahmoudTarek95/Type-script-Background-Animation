class Cir {
    private x: number;
    private y: number;
    private r: number;
    private c: string;

    constructor() {
        this.init();
    }
    draw() {
        let c = Splash.ctx;
        c.beginPath();
        c.fillStyle = this.c;
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        c.fill();
    }
    disappear() {
        this.r *= .99;
        if (this.r < .5) {
            this.init();
        }
    }
    init(){
        this.x = Math.floor(Math.random() * window.innerWidth);
        this.y = Math.floor(Math.random() * window.innerHeight);
        this.r = Math.random() * 20;
        this.c = Math.random() > .5 ? 'rgba(255,255,255,.9)' : 'rgba(255,255,255,.4)';
    }
}
class Splash {
    private canvas: HTMLCanvasElement;
    static ctx: CanvasRenderingContext2D;
    private circles: Cir[];

    constructor() {
        this.circles = new Array < Cir > ();
        this.init();
    }
    init() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        Splash.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvas.style.background = 'rgb(50,100,150)';

        for (let i = 0; i < 500; i++) {
            this.circles.push(new Cir())
        }
    }
    animate() {
        Splash.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for (let i = 0; i < 500; i++) {
            this.circles[i].disappear();
            this.circles[i].draw();
        }
    }
}
window.addEventListener('load', function () {
    let s = new Splash();
    setInterval(()=>{
        s.animate();
    },30)
    
})