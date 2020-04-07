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
        let timeWin = document.querySelector('.timeWin');
        let stepsWin = document.querySelector('.stepsWin');
        let steps = document.querySelector('.steps');
        let time = document.querySelector('.time');
        timeWin.textContent = time.textContent;
        stepsWin.textContent = steps.textContent;
        let show = document.querySelector('.wrapperAlertWin');
        show.classList.remove('hidden');
        document.addEventListener('click', function remove() {
            show.classList.add('hidden');
        });
        document.removeEventListener('click', remove);
    }
}

module.exports = {
    checkWin,
}