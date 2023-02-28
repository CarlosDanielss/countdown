function timerConversion(duration, displayMinutes, displaySeconds) {
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
            console.log("acabou");
            clearInterval(myInterval);
        }
    }, 1000);
}
function startCountdown() {
    let timeCountdown = document.getElementById("timeCountdown").value;
    let timerCountdownConversion = parseInt(timeCountdown);
    let duration = 60 * timerCountdownConversion; // Converter para segundos
    displayMinutes = document.querySelector('#countdownMin'); // selecionando o timer
    displaySeconds = document.querySelector('#countdownSec'); // selecionando o timer
    timerConversion(duration, displayMinutes, displaySeconds); // iniciando o timer
};