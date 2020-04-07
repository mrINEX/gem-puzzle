function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function shuffleRun(mix) {
    let forShoffle = [];
    for(let i of mix) {
        forShoffle.push(i.textContent);
    }
    shuffle(forShoffle);
    for(let i = 0; i < mix.length; i += 1) {
        mix[i].textContent = forShoffle[i];
        if(mix[i].textContent === '') {
            mix[i].classList.add('emptySquare');
        }
    }
}

module.exports = {
    shuffleRun,
}