// MAIN draw looP
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const squares = [];
const squareSize = 50;
const numSquaresPerRow = 8;
const numRows = 8;
const blinkSpeed = 0.03;
const pulsingSpeed = 0.02;

for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numSquaresPerRow; j++) {
        squares.push({
            x: j * squareSize,
            y: i * squareSize,
            color: '#000',
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    squares.forEach(square => {
        ctx.fillStyle = square.color;
        ctx.fillRect(square.x, square.y, squareSize, squareSize);
    });

    requestAnimationFrame(draw);
}

function update() {
    squares.forEach(square => {
        square.color = '#fff';
    });

    const currentTime = Date.now();
    squares.forEach((square, index) => {
        const blinkTime = blinkSpeed * index * 1000;
        const pulsingTime = pulsingSpeed * (index % numSquaresPerRow) * 1000;
        const pulsingValue = Math.sin(currentTime / pulsingTime);
        const blinkValue = Math.sin(currentTime / blinkTime);

        if (pulsingValue > 0) {
            square.color = `rgba(255, 255, 255, ${pulsingValue})`;
        }

        if (blinkValue > 0) {
            square.color = '#000';
        }
    });

    setTimeout(update, 1000 / 60);
}

draw();
update();

document.addEventListener('keydown', function (e) {

});

document.addEventListener('keyup', function (e) {
    if (e.which === 38 || e.which === 40) {
        // rightPaddle.dy = 0;
    }

    if (e.which === 83 || e.which === 87) {
        // leftPaddle.dy = 0;
    }
});

// Add touch event listeners to the canvas
canvas.addEventListener('touchstart', handleTouchStart);
canvas.addEventListener('touchmove', handleTouchMove);

// Variables to store touch positions
let leftTouchY = null; let rightTouchY = null;

// MOBILE CONTROLS Handle touch start event
function handleTouchStart(event) {
    event.preventDefault();
    // Iterate through all touches
    for (let i = 0; i < event.touches.length; i++) {
        const touch = event.touches[i];
        // Check if touch is on the left or right side of the canvas
        if (touch.clientX < canvas.width / 2) {
            leftTouchY = touch.clientY;
        } else {
            rightTouchY = touch.clientY;
        }
    }
}

// Handle touch move event
function handleTouchMove(event) {
    event.preventDefault();
    // Iterate through all touches
    for (let i = 0; i < event.touches.length; i++) {
        const touch = event.touches[i];

        // Update the paddle positions based on the touch movements
        if (touch.clientX < canvas.width / 2) {
            // leftPaddle.y = touch.clientY - paddleHeight / 2;
        } else {
            // rightPaddle.y = touch.clientY - paddleHeight / 2;
        }
    }
}

// Add touchend event listeners to reset touch positions when touches end
canvas.addEventListener('touchend', handleTouchEnd);

// Handle touch end event
function handleTouchEnd(event) {
    event.preventDefault();

    // Iterate through all touches
    for (let i = 0; i < event.touches.length; i++) {
        const touch = event.touches[i];

        // Check if touch has ended on the left or right side of the canvas
        if (touch.clientX < canvas.width / 2) {
            leftTouchY = null;
        } else {
            rightTouchY = null;
        }
    }
}
