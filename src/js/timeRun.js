function timeRun() {
    let secondsSpan = document.querySelector('.time').childNodes[3];
    if((Number(secondsSpan.textContent) + 1) % 60 === 0) {
        let minutesSpan = document.querySelector('.time').childNodes[1];
        if((Number(minutesSpan.textContent) + 1) % 60 < 10) {
            minutesSpan.textContent = `0${(Number(minutesSpan.textContent) + 1) % 60}`;
        } else {
            minutesSpan.textContent = (Number(minutesSpan.textContent) + 1) % 60;
        }
    }
    if((Number(secondsSpan.textContent) + 1) % 60 < 10) {
        secondsSpan.textContent = `0${(Number(secondsSpan.textContent) + 1) % 60}`;
    } else {
        secondsSpan.textContent = (Number(secondsSpan.textContent) + 1) % 60;
    }
}

module.exports = {
    timeRun,
}