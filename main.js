const container = document.getElementById('container');
const resetButton = document.getElementById('reset-button');

do {
  const square = document.createElement('div');
  let squareId = container.childElementCount;

  square.textContent = '';

  square.setAttribute('id', squareId + 1);
  square.classList.add('square');
  container.appendChild(square);

  square.addEventListener('mouseover', (e) => {
    e.target.classList.add('square-hover');
  });
} while (container.childElementCount < 256);

resetButton.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');

  container.classList.add('tilt-shaking');

  container.addEventListener('animationend', () => {
    container.classList.remove('tilt-shaking');
  });

  for (let square of squares) {
    square.classList.remove('square-hover');
  }
});
