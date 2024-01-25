const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let playerX = 50;
let playerY = 50;

function drawPlayer() {
    ctx.fillStyle = '#00F';
    ctx.fillRect(playerX, playerY, 50, 50);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gameLoop() {
    clearCanvas();
    drawPlayer();
    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        playerY -= 5;
    } else if (event.key === 'ArrowDown') {
        playerY += 5;
    } else if (event.key === 'ArrowLeft') {
        playerX -= 5;
    } else if (event.key === 'ArrowRight') {
        playerX += 5;
    }
});

gameLoop();
