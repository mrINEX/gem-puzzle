function removeDraggableAll() {
    let tiles = document.querySelectorAll('.square');
    for(let i = 0; i < tiles.length; i += 1) {
        tiles[i].removeAttribute('draggable');
    };
}

module.exports = {
    removeDraggableAll,
}