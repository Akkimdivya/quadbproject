let timerEl = document.getElementById("timer");

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("firstSelect").classList.toggle("dark-mode");
    document.getElementById("firstSelect2").classList.toggle("dark-mode");
    document.getElementById("firstSelect1").classList.toggle("dark-mode");
    document.getElementById("cryptoTable").classList.toggle("new");
}
myFunction();
let countdown = 5;

let intervalId = setInterval(function() {
    countdown = countdown - 1;
    timerEl.textContent = countdown;
    if (countdown === 1) {
        countdown += 60;
    }
}, 1000);