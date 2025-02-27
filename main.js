const container = document.getElementById('container');
const resetButton = document.getElementById('reset-button');
const gridSizeButton = document.getElementById('grid-size');

let columns = 16;

// Initial grid setup

function createGrid(numColumns) {
  for (let i = 0; i < numColumns * numColumns; i++) {
    const square = document.createElement('div');
    let squareId = container.childElementCount;

    let squareSize = (1 / numColumns) * 100;
    console.log(squareSize);

    square.setAttribute('id', squareId + 1);
    square.style.width = squareSize + '%';
    square.style.height = squareSize + '%';
    square.style.flexBasis = squareSize + '%';
    square.classList.add('square');
    container.appendChild(square);

    square.addEventListener('mouseover', (e) => {
      e.target.classList.add('square-hover');
    });
  }
}

createGrid(columns);

gridSizeButton.addEventListener('click', () => {
  let userColumns = Number(prompt('Chose a number of columns! (Maximum 100)'));

  if (isNaN(userColumns) || !userColumns) {
    alert('Not a valid number. Try again!');
    return;
  }

  if (userColumns >= 101) {
    alert(`That's too high.\n Enter a number less than or equal to 100.  `);
    return;
  }

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  createGrid(userColumns);
});

function resetSketchPad() {
  const squares = document.querySelectorAll('.square');
  for (let square of squares) {
    square.classList.remove('square-hover');
  }
}

resetButton.addEventListener('click', () => {
  container.classList.add('tilt-shaking');
  resetSketchPad();

  container.addEventListener('animationend', () => {
    container.classList.remove('tilt-shaking');
  });
});
