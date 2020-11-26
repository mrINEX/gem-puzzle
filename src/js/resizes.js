function resizes() {
  const area = document.querySelector('.wrapperArea');
  const square = document.querySelector('.square');
  const size = localStorage.getItem('area-size');

  const widthSquare = square.getBoundingClientRect().width;
  let template = `width: ${Number(size) * widthSquare + size * 2}px;`;
  template += `height: ${Number(size) * widthSquare + size * 2}px;`;

  area.setAttribute('style', template);
}

module.exports = {
  resizes
};
