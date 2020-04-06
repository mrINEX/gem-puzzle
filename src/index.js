const { create } = require('./js/createHtml');
const { shuffle } = require('./js/shuffle');

let stopIntervalSeconds = setInterval(() => {
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
}, 1000);

create(4);

document.querySelector('input').addEventListener('change', (event) => {
    document.querySelector('.wrapperArea').remove();
    document.querySelector('.wrapperStepsTime').remove();
    document.querySelector('.wrapperInfo').remove();
    create(event.srcElement.value);
    event.srcElement.value = '';
});

let mix = document.querySelectorAll('.square');
console.log(mix);