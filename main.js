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


function black() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {box.addEventListener('mouseover', blackColor)});
}


function blackColor(e) {
  e.target.style.background = 'black';
}


function rainbowColor(e) {
  num1 = Math.floor(Math.random() * 255);
  num2 = Math.floor(Math.random() * 255);
  num3 = Math.floor(Math.random() * 255);
  e.target.style.background = `rgb(${num1}, ${num2}, ${num3})`;
}


function rainbow() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {box.addEventListener('mouseover', rainbowColor)});
}


function reset() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {box.style.background = null})
}