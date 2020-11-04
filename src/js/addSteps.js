function addStep() {
    const steps = document.querySelector('.steps');
    steps.children[0].textContent = +steps.children[0].textContent + 1;
}

module.exports = {
    addStep
};
