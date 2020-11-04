const { markDraggable } = require('./markDrug');
const { removeDraggableAll } = require('./removeDraggableAll');
const { addStep } = require('./addSteps');
const { checkWin } = require('./checkWin');

function moveTile({ target }) {
    const tiles = document.querySelectorAll('.square');
    for (let i = 0; i < tiles.length; i += 1) {
        if (tiles[i].textContent === target.textContent) {
            if (tiles[i + 1] !== undefined && tiles[i + 1].textContent === '') {
                if ((i + 1) % Math.sqrt(tiles.length) !== 0) {
                    console.log('1');
                    const element = tiles[i];
                    tiles[i].remove();
                    tiles[i + 1].after(element);
                    addStep();
                }
            }
            if (tiles[i - 1] !== undefined && tiles[i - 1].textContent === '') {
                if ((i - 1) % Math.sqrt(tiles.length) !== Math.sqrt(tiles.length) - 1) {
                    console.log('2');
                    const element = tiles[i];
                    setTimeout(() => {
                        tiles[i].remove();
                        tiles[i - 1].before(element);
                        element.style.left = '0';
                    }, 1000);
                    element.style.left = '-82px';
                    addStep();
                }
            }
            if (tiles[i + Math.sqrt(tiles.length)] !== undefined && tiles[i + Math.sqrt(tiles.length)].textContent === '') {
                console.log('3');
                const element = tiles[i];
                const empty = tiles[i + Math.sqrt(tiles.length)];
                tiles[i].remove();
                tiles[i + Math.sqrt(tiles.length)].remove();
                tiles[i + (Math.sqrt(tiles.length) - 1)].after(element);
                tiles[i + 1].before(empty);
                addStep();
            }
            if (tiles[i - Math.sqrt(tiles.length)] !== undefined && tiles[i - Math.sqrt(tiles.length)].textContent === '') {
                console.log('4');
                const element = tiles[i];
                const empty = tiles[i - Math.sqrt(tiles.length)];
                tiles[i].remove();
                tiles[i - Math.sqrt(tiles.length)].remove();
                tiles[i - (Math.sqrt(tiles.length) - 1)].before(element);
                tiles[i - 1].after(empty);
                addStep();
            }
        }
        removeDraggableAll();
    }
    markDraggable();
    checkWin();
}

module.exports = {
    moveTile
};
