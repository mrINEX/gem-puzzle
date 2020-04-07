function moveTile({target}) {
    let tiles = document.querySelectorAll('.square');
    for(let i = 0; i < tiles.length; i += 1) {
        if(tiles[i].textContent === target.textContent) {
            if(tiles[i + 1] !== undefined && tiles[i + 1].textContent === '') {
                if( (i + 1) % Math.sqrt(tiles.length) !== 0) {
                    let element = tiles[i];
                    tiles[i].remove();
                    tiles[i + 1].after(element);
                }
            }
            if(tiles[i - 1] !== undefined && tiles[i - 1].textContent === '') {
                if( (i - 1) % Math.sqrt(tiles.length) !== Math.sqrt(tiles.length) - 1) {
                    let element = tiles[i];
                    tiles[i].remove();
                    tiles[i - 1].before(element);
                }
            }
            if(tiles[i + 4] !== undefined && tiles[i + 4].textContent === '') {
                let element = tiles[i];
                let empty = tiles[i + 4];
                tiles[i].remove();
                tiles[i + 4].remove();
                tiles[i + 3].after(element);
                tiles[i + 1].before(empty);
            }
            if(tiles[i - 4] !== undefined && tiles[i - 4].textContent === '') {
                let element = tiles[i];
                let empty = tiles[i - 4];
                tiles[i].remove();
                tiles[i - 4].remove();
                tiles[i - 3].before(element);
                tiles[i - 1].after(empty);
            }
        }
    }
}

module.exports = {
    moveTile,
}