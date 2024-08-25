let startTime;
let timerInterval;

document.getElementById('startButton').addEventListener('click', function() {
    startTime = Date.now();
    timerInterval = setInterval(updateTime, 1000);
});

document.getElementById('stopButton').addEventListener('click', function() {
    clearInterval(timerInterval);
});

function updateTime() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('timer').textContent = `Time spent: ${elapsed} seconds`;
}
