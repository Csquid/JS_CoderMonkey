const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    var arr = [hours, minutes, seconds];
        
    hours = zeroTime(hours);
    minutes = zeroTime(minutes);
    seconds = zeroTime(seconds);

    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function zeroTime(data) {
    if(data < 10) {
        data = "0" + data;
    }

    return data;
}

function init() {
    // getTime();
    setInterval(getTime, 1000);
}

init();