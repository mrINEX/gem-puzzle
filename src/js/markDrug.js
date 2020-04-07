function markDraggable() {
    let tiles = document.querySelectorAll('.square');
    for(let i = 0; i < tiles.length; i += 1) {
        if(tiles[i].classList.contains('emptySquare')) {
            if(tiles[i + 1] !== undefined) {
                if( (i + 1) % Math.sqrt(tiles.length) !== 0) {
                    tiles[i + 1].setAttribute('draggable', 'true');
                }
            }
            if(tiles[i - 1] !== undefined) {
                if( (i - 1) % Math.sqrt(tiles.length) !== Math.sqrt(tiles.length) - 1) {
                    tiles[i - 1].setAttribute('draggable', 'true');
                }
            }
            if(tiles[i + Math.sqrt(tiles.length)] !== undefined) {
                tiles[i + Math.sqrt(tiles.length)].setAttribute('draggable', 'true');
            }
            if(tiles[i - Math.sqrt(tiles.length)] !== undefined) {
                tiles[i - Math.sqrt(tiles.length)].setAttribute('draggable', 'true');
            }
        }
    }
}

module.exports = {
    markDraggable,
}