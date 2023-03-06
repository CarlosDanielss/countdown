function timerConversion(duration, displayMinutes, displaySeconds, rocket) {
    const audio = new Audio("songAlert.mp3");
    let timer = duration, minutes, seconds;
    let myInterval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        displayMinutes.textContent = minutes;
        displaySeconds.textContent = seconds;
        if (--timer < 0) {
            timer = 0;
            audio.play();
            rocket.style.animation = "rocketUp 6s";
            clearInterval(myInterval);
        }
    }, 1000);
}
function startCountdown() {
    let messageError = document.getElementById("messageError");
    let inputValue = document.getElementById("timerValue");
    let countdown = document.getElementById("countdownContainer");
    let formTimer = document.getElementById("formTimerValue");
    let rocket = document.getElementById("rocket");
    let btnStart = document.getElementById("btnStart");
    let timeCountdown = document.getElementById("timerValue").value;
    let timerCountdownConversion = parseInt(timeCountdown);

    if (timerCountdownConversion <= 0) {
        messageError.style.display = "block";
        messageError.style.animation = "mooveError 0.2s";
        inputValue.style.border = "1px solid red";
        inputValue.style.animation = "mooveError 0.2s";
    } else if (timerCountdownConversion > 50) {
        messageError.style.display = "block";
        messageError.style.animation = "mooveError 0.2s";
        inputValue.style.border = "1px solid red";
        inputValue.style.animation = "mooveError 0.2s";
    } else {
        btnStart.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
        let viewTimerConfig = setTimeout(() => {
            formTimer.style.display = "none";
            countdown.style.display = "flex";
            rocket.style.animation = "mooveInfinit 3s infinite";
        }, 1000)

        let duration = 60 * timerCountdownConversion; // Converter para segundos
        displayMinutes = document.querySelector('#countdownMin'); // selecionando o timer
        displaySeconds = document.querySelector('#countdownSec'); // selecionando o timer
        timerConversion(duration, displayMinutes, displaySeconds, rocket); // iniciando o timer
    }
};

function newTimerValue() {
    window.location.href = "index.html";
}