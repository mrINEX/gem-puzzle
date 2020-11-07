function storage(data) {
  const games = window.localStorage.getItem('results-gem-puzzle');
  if (games) {
    const arr = JSON.parse(games);
    arr.push(data);
    window.localStorage.setItem('results-gem-puzzle', JSON.stringify(arr));
  } else {
    window.localStorage.setItem('results-gem-puzzle', JSON.stringify([data]));
  }
}

module.exports = {
  storage
};
