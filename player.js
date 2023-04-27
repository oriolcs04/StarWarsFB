class Player {
    constructor() {
        this.position = {
            x: 150,
            y: 200
        };
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 30;
        this.height = 30;
        this.weight = 1;
    }

    update() {
        if (this.position.y > canvas.height - this.height) {
            this.position.y = canvas.height - this.height;
            this.velocity.y = 0;
        } else {
            this.velocity.y += this.weight;
            this.velocity.y *= 0.9;
            this.position.y += this.velocity.y;
        }

        if (this.position.y < 0 + this.height) {
            this.position.y = 0 + this.height;
            this.velocity.y = 0;
        }

        if (spacePressed) {
            this.jump();
        }
    }
    draw() {
        const xwing = new Image();
        xwing.src = 'xwing.png';
        cntx.drawImage(xwing, player.position.x - 90, player.position.y - 50, 100, 50);
    }
    jump() {
        this.velocity.y -= 2;
    }
}

const player = new Player();