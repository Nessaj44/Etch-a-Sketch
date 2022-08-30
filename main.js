function createGrid (num) {
  const container = document.querySelector('#container')
  num = document.querySelector('#number').value;
  
  if(num > 100 || num === '') {
    alert('Pls enter 1 - 100');
  } else {
    for(let i = 0; i < (num * num); i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      container.appendChild(box);
    }
  }

  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
}


