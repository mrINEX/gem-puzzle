const { create } = require('./js/createHtml');
const { shuffleRun } = require('./js/shuffle');
const { moveTile } = require('./js/moveTile');
const { timeRun } = require('./js/timeRun');
const { markDraggable } = require('./js/markDrug');
const { removeDraggableAll } = require('./js/removeDraggableAll');
const { addStep } = require('./js/addSteps');
const { checkWin } = require('./js/checkWin');

let stopIntervalSeconds = setInterval(timeRun, 1000);

create(4);
shuffleRun(document.querySelectorAll('.square'));
markDraggable();

if(localStorage.getItem('stepsTime') !== null) {
    document.querySelector('.wrapperStepsTime').outerHTML = localStorage.getItem('stepsTime');
}
if(localStorage.getItem('info') !== null) {
    document.querySelector('.wrapperInfo').outerHTML = localStorage.getItem('info');
}
if(localStorage.getItem('area') !== null) {
    document.querySelector('.wrapperArea').outerHTML = localStorage.getItem('area');
}

let listenAreas;
let activeButtons = document.querySelector('.wrapperActiveButton');
listenAreas = document.querySelector('.wrapperArea');
listenAreas.addEventListener('click', moveTile);

document.querySelector('input').addEventListener('change', (event) => {
    if(isFinite(event.srcElement.value) && event.srcElement.value > 2 && event.srcElement.value < 9) {
        listenAreas.removeEventListener('click', moveTile);
        document.querySelector('.wrapperStepsTime').remove();
        document.querySelector('.wrapperArea').remove();
        document.querySelector('.wrapperInfo').remove();
        create(event.srcElement.value);
        shuffleRun(document.querySelectorAll('.square'));
        markDraggable();
        event.srcElement.value = '';
        listenAreas = document.querySelector('.wrapperArea');
        listenAreas.addEventListener('click', moveTile);
    } else {
        event.srcElement.value = 'from 3 to 8';
        document.querySelector('input').setAttribute('style', 'color:red;');
        setTimeout(() => {
            event.srcElement.value = '';
            document.querySelector('input').removeAttribute('style');
        }, 1500);
    }
});

activeButtons.addEventListener('click', ({target}) => {

    if(target.textContent === 'stop') {
        clearInterval(stopIntervalSeconds);
        listenAreas.removeEventListener('click', moveTile);
        removeDraggableAll();
    }

    if(target.textContent === 'stir and start') {
        listenAreas.removeEventListener('click', moveTile);
        document.querySelector('.wrapperStepsTime').remove();
        document.querySelector('.wrapperArea').remove();
        document.querySelector('.wrapperInfo').remove();
        clearInterval(stopIntervalSeconds);
        create(4);
        shuffleRun(document.querySelectorAll('.square'));
        markDraggable();
        listenAreas = document.querySelector('.wrapperArea');
        listenAreas.addEventListener('click', moveTile);
        stopIntervalSeconds = setInterval(timeRun, 1000);
    }

    if(target.textContent === 'save') {
        localStorage.setItem('stepsTime', document.querySelector('.wrapperStepsTime').outerHTML);
        localStorage.setItem('area', document.querySelector('.wrapperArea').outerHTML);
        localStorage.setItem('info', document.querySelector('.wrapperInfo').outerHTML);
    }
})


let dragged;
document.addEventListener("dragstart", ({target}) => {
    dragged = target;
});
document.addEventListener("dragover", (event) => {
    event.preventDefault();
});
document.addEventListener("drop", ({target}) => {
    if(target.classList.contains("emptySquare") && dragged.hasAttribute('draggable')) {
        let outerTarget = target.outerHTML;
        target.outerHTML = dragged.outerHTML;
        dragged.outerHTML = outerTarget;
        removeDraggableAll();
        markDraggable();
        addStep();
        checkWin();
    }
});
