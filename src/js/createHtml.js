const activeButton = ['stir and start', 'stop', 'save', 'results'];

let container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.append(container);

let wrapperActiveButton = document.createElement('div');
wrapperActiveButton.setAttribute('class', 'wrapperActiveButton');
container.append(wrapperActiveButton);
for(let i = 0; i < activeButton.length; i += 1) {
    let div = document.createElement('button');
    div.setAttribute('class', 'activeButton');
    div.textContent = activeButton[i];
    wrapperActiveButton.append(div);
}

function create(size) {
    let wrapperStepsTime = document.createElement('div');
    wrapperStepsTime.setAttribute('class', 'wrapperStepsTime');
    container.append(wrapperStepsTime);
    let spanSteps = document.createElement('span');
    spanSteps.innerHTML = 'Steps: <span>0</span>';
    spanSteps.setAttribute('class', 'steps');
    let spanTime = document.createElement('span');
    spanTime.innerHTML = 'Time: <span>00</span>:<span>00</span>';
    spanTime.setAttribute('class', 'time');
    wrapperStepsTime.append(spanSteps, spanTime);

    function sizeArea(size) {
        let wrapperArea = document.createElement('div');
        wrapperArea.setAttribute('class', 'wrapperArea');
        wrapperArea.setAttribute('style', `width: ${Number(size +'00') + size*4}px`);
        container.append(wrapperArea);
        for(let i = 0; i < size**2; i += 1) {
            let div = document.createElement('div');
            div.setAttribute('class', 'square');
            if(i !== 0) {
                div.innerHTML = i;
            }
            wrapperArea.append(div);
        }

        let wrapperInfo = document.createElement('div');
        wrapperInfo.setAttribute('class', 'wrapperInfo');
        wrapperInfo.innerHTML = `<span>Area size: ${size}x${size}</span>`
        container.append(wrapperInfo);
    }
    sizeArea(size);
}

let wrapperOtherSize = document.createElement('div');
wrapperOtherSize.setAttribute('class', 'wrapperOtherSize');
wrapperOtherSize.innerHTML = `<span>Other size: <input placeholder='enter number'/></span>`;
container.append(wrapperOtherSize);

module.exports = {
    create,
}