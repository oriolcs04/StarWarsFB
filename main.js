const canvas = document.getElementById('canvas1');
const cntx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let frame = 0;
let score = 0;
let gameSpeed = 2;

function animate(){
    cntx.clearRect(0, 0, canvas.width, canvas.height);
    generateObstacles();
    player.update();
    player.draw();
    cntx.fillStyle = 'white'
    cntx.font = '30px Georgia'
    cntx.fillText(score, 550, 30);
    collisionDetector();
    if (collisionDetector()) return;
    requestAnimationFrame(animate);
    frame++;   
}
animate();

addEventListener('keydown', ({ keyCode }) => {
    if (keyCode == 32) {
        spacePressed = true;
    }
});

addEventListener('keyup', ({ keyCode }) => {
    if (keyCode == 32) {
        spacePressed = false;
    }
});

const explosion = new Image();
explosion.src = 'explosion.png';

function collisionDetector() {
    for (let i = 0; i < obstaclesArray.length; i++) {
        if (player.position.x < obstaclesArray[i].x + obstaclesArray[i].width && player.position.x + player.width > obstaclesArray[i].x && ((player.position.y < 0 + obstaclesArray[i].top && player.position.y + player.height > 0) || player.position.y > canvas.height - obstaclesArray[i].bottom && player.position.y + player.height < canvas.height)) {
            cntx.drawImage(explosion, player.position.x - 90, player.position.y - 50, 200, 100);
            cntx.font = '35px Georgia';
            cntx.fillStyle = 'white';
            cntx.fillText('GAME OVER || SCORE: ' + score, 100, canvas.height/2);
            return true;
        }
    }
}