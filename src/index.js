const { create } = require('./js/createHtml');
const { shuffleRun } = require('./js/shuffle');
const { moveTile } = require('./js/moveTile');
const { timeRun } = require('./js/timeRun');
const { markDraggable } = require('./js/markDrug');
const { removeDraggableAll } = require('./js/removeDraggableAll');
const { addStep } = require('./js/addSteps');
const { checkWin } = require('./js/checkWin');

let stopIntervalSeconds = setInterval(timeRun, 1000);

create(localStorage.getItem('area-size') || 4);
shuffleRun(document.querySelectorAll('.square'));
markDraggable();

let listenAreas;
const activeButtons = document.querySelector('.wrapperActiveButton');
listenAreas = document.querySelector('.wrapperArea');
listenAreas.addEventListener('click', moveTile);

document.querySelector('input').addEventListener('change', (event) => {
    if (isFinite(event.target.value) && event.target.value > 2 && event.target.value < 9) {
        listenAreas.removeEventListener('click', moveTile);
        document.querySelector('.wrapperStepsTime').remove();
        document.querySelector('.container-area').remove();
        document.querySelector('.wrapperInfo').remove();
        create(event.target.value);
        shuffleRun(document.querySelectorAll('.square'));
        markDraggable();
        event.target.value = '';
        listenAreas = document.querySelector('.wrapperArea');
        listenAreas.addEventListener('click', moveTile);
    } else {
        event.target.value = 'from 3 to 8';
        document.querySelector('input').setAttribute('style', 'color:red;');
        setTimeout(() => {
            event.target.value = '';
            document.querySelector('input').removeAttribute('style');
        }, 1500);
    }
});

activeButtons.addEventListener('click', ({ target }) => {
    if (target.textContent === 'stop') {
        clearInterval(stopIntervalSeconds);
        listenAreas.removeEventListener('click', moveTile);
        removeDraggableAll();
    }

    if (target.textContent === 'stir and start') {
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

    if (target.textContent === 'save') {
        localStorage.setItem('stepsTime', document.querySelector('.wrapperStepsTime').outerHTML);
        localStorage.setItem('area', document.querySelector('.wrapperArea').outerHTML);
        localStorage.setItem('info', document.querySelector('.wrapperInfo').outerHTML);
    }
});


window.onresize = () => {
    const area = document.querySelector('.wrapperArea');
    const square = document.querySelector('.square');
    const size = localStorage.getItem('area-size');

    const widthSquare = square.getBoundingClientRect().width;
    let template = `width: ${Number(size) * widthSquare + size * 2}px;`;
    template += `height: ${Number(size) * widthSquare + size * 2}px;`;

    area.setAttribute('style', template);
};


let dragged;
let draggedClient;
document.addEventListener('dragstart', ({ target }) => {
    draggedClient = target.getBoundingClientRect();
    dragged = target;
});
document.addEventListener('dragover', (event) => {
    event.preventDefault();
});
document.addEventListener('drop', ({ target }) => {
    const droppedClient = target.getBoundingClientRect();
    console.log('dragged:', draggedClient);
    console.log('dropped:', droppedClient);
    if (target.classList.contains('emptySquare') && dragged.hasAttribute('draggable')) {
        setTimeout(() => {
            target.removeAttribute('style');
            dragged.removeAttribute('style');

            const outerTarget = target.outerHTML;
            target.outerHTML = dragged.outerHTML;
            dragged.outerHTML = outerTarget;

            removeDraggableAll();
            markDraggable();
            addStep();
            checkWin();
        }, 1000);
        if (draggedClient.y === droppedClient.y) {
            if (draggedClient.x > droppedClient.x) {
                target.style.left = `${droppedClient.width + 2}px`;
                dragged.style.left = `-${droppedClient.width + 2}px`;
            }
            if (draggedClient.x < droppedClient.x) {
                target.style.left = `-${droppedClient.width + 2}px`;
                dragged.style.left = `${droppedClient.width + 2}px`;
            }
        } else {
            if (draggedClient.y > droppedClient.y) {
                target.style.top = `${droppedClient.width + 2}px`;
                dragged.style.top = `-${droppedClient.width + 2}px`;
            }
            if (draggedClient.y < droppedClient.y) {
                target.style.top = `-${droppedClient.width + 2}px`;
                dragged.style.top = `${droppedClient.width + 2}px`;
            }
        }
    }
});
