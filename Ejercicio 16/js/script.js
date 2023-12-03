function updateClock() {
    var now = new Date();
    var hours = formatDigit(now.getHours());
    var minutes = formatDigit(now.getMinutes());
    var seconds = formatDigit(now.getSeconds());

    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
}

// añadir 0 si el num es entre 0 y 9
function formatDigit(digit) {
    return digit < 10 ? "0" + digit : digit;
}

// llama update clock cada segundo
setInterval(updateClock, 1000);

// inicializacion programa
updateClock();
