function checkWin() {
    let tiles = document.querySelectorAll('.square');
    let currentArray = [];
    for(let i = 0; i < tiles.length; i += 1) {
        currentArray.push(tiles[i].textContent);
    }
    let sortArray = currentArray.slice().sort((a,b) => a - b);
    let empty = sortArray.shift();
    sortArray.push(empty);
    if(sortArray.toString() === currentArray.toString()) {
        alert('win');
    }
}

module.exports = {
    checkWin,
}