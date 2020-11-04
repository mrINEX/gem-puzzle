function removeDraggableAll() {
    const tiles = document.querySelectorAll('.square');
    for (let i = 0; i < tiles.length; i += 1) {
        tiles[i].removeAttribute('draggable');
        tiles[i].classList.remove('draggable-tile');
    }
}

module.exports = {
    removeDraggableAll
};
