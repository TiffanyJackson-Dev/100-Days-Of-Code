let timer;
let timeLeft = 0;
let isPaused = false;

document.getElementById("start").addEventListener("click", function() {
    let minutes = parseInt(document.getElementById("minutes").value) || 0;
    let seconds = parseInt(document.getElementById("seconds").value) || 0;
    
    if (minutes === 0 && seconds === 0) {
        alert("Please enter a time to start the countdown.");
        return;
    }

    if (!timer || isPaused) {
        timeLeft = isPaused ? timeLeft : minutes * 60 + seconds;
        startTimer();
        isPaused = false;
    }
});

document.getElementById("pause").addEventListener("click", function() {
    if (timer) {
        clearInterval(timer);
        timer = null;
        isPaused = true;
    }
});

document.getElementById("reset").addEventListener("click", function() {
    clearInterval(timer);
    timer = null;
    isPaused = false;
    timeLeft = 0;
    document.getElementById("timer").innerText = "00:00";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
});

function startTimer() {
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            timer = null;
            alert("Time's up!");
        }
    }, 1000);
}

function updateDisplay() {
    let mins = Math.floor(timeLeft / 60);
    let secs = timeLeft % 60;
    document.getElementById("timer").innerText = 
        (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
}