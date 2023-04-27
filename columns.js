const obstaclesArray = [];
class Obstacle{
    constructor(){
        this.top = (Math.random() * canvas.height/3) + 40;
        this.bottom = (Math.random() * canvas.height/3) + 40;
        this.x = canvas.width;
        this.width = 20;
        this.passed = false
    }

    draw(){
        cntx.fillStyle = 'green';
        cntx.fillRect(this.x, 0, this.width, this.top);
        cntx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom)
    }
    
    update(){
        this.x -= gameSpeed;
        if (!this.passed && this.x <player.position.x) {
            score++;
            this.passed = true;
        }
        this.draw();
    }
}

function generateObstacles() {
    if (frame % 50 === 0) {
        obstaclesArray.unshift(new Obstacle())
    }
    for (let i = 0; i < obstaclesArray.length; i++) {
        obstaclesArray[i].update();
    }
    if (obstaclesArray.length > 20){
        obstaclesArray.pop(obstaclesArray[0])
    }
}