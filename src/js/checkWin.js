function checkWin() {
    const tiles = document.querySelectorAll('.square');
    const currentArray = [];
    for (let i = 0; i < tiles.length; i += 1) {
        currentArray.push(tiles[i].textContent);
    }
    const sortArray = currentArray.slice().sort((a, b) => a - b);
    const empty = sortArray.shift();
    sortArray.push(empty);
    if (sortArray.toString() === currentArray.toString()) {
        const timeWin = document.querySelector('.timeWin');
        const stepsWin = document.querySelector('.stepsWin');
        const steps = document.querySelector('.steps');
        const time = document.querySelector('.time');
        timeWin.textContent = time.textContent;
        stepsWin.textContent = steps.textContent;
        const show = document.querySelector('.wrapperAlertWin');
        show.classList.remove('hidden');
        setTimeout(() => {
            show.classList.add('hidden');
        }, 3000);
    }
}

module.exports = {
    checkWin
};
