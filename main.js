function createGrid (num = 16) {
  const container = document.querySelector('#container');
  for(let i = 0; i < (num * num); i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
  }
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
}
createGrid()