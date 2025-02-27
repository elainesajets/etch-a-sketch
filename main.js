const container = document.getElementById('container');
const resetButton = document.getElementById('reset-button');
const gridSizeButton = document.getElementById('grid-size');
const grayMode = document.getElementById('gray-mode');

let columns = 16;

// Initial grid setup

function createGrid(numColumns) {
  for (let i = 0; i < numColumns * numColumns; i++) {
    const square = document.createElement('div');
    let squareId = container.childElementCount;

    let squareSize = (1 / numColumns) * 100;
    let alpha = 0;
    console.log(squareSize);

    square.setAttribute('id', squareId + 1);
    square.style.width = squareSize + '%';
    square.style.height = squareSize + '%';
    square.style.flexBasis = squareSize + '%';
    square.classList.add('square');
    container.appendChild(square);

    square.addEventListener('mouseover', () => {
      if (alpha < 1) {
        alpha += 0.1;
      }
      square.style.backgroundColor = `rgba(73, 73, 73, ${alpha})`;
    });
  }
}

createGrid(columns);

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

const colorMode = document.getElementById('color-mode');

colorMode.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');

  resetSketchPad();
  squares.forEach((square) => {
    let red = randomNumber(255);
    let green = randomNumber(255);
    let blue = randomNumber(255);
    let alpha = 0;

    square.addEventListener('mouseover', () => {
      if (alpha < 1) {
        alpha += 0.1;
      }
      square.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    });
  });
});

gridSizeButton.addEventListener('click', () => {
  columns = Number(prompt('Chose a number of columns! (Maximum 100)'));

  if (isNaN(columns) || !columns) {
    alert('Not a valid number. Try again!');
    return;
  }

  if (columns >= 101) {
    alert(`That's too high.\n Enter a number less than or equal to 100.  `);
    return;
  }

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  createGrid(columns);
});

container.addEventListener('dblclick', resetSketchPad);

function resetSketchPad() {
  const squares = document.querySelectorAll('.square');

  for (let square of squares) {
    square.style.backgroundColor = `rgba(0, 0, 0, 0`;
  }
}

resetButton.addEventListener('click', () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createGrid(columns);

  container.classList.add('tilt-shaking');
  resetSketchPad();

  container.addEventListener('animationend', () => {
    container.classList.remove('tilt-shaking');
  });
});

/* grayMode.addEventListener('click', () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createGrid(columns);

  const squares = document.querySelectorAll('.square');

  for (let square in squares) {
    square.addEventListener('mouseover', () => {
      let alpha = 0;
      if (alpha < 1) {
        alpha += 0.1;
      }
      square.style.backgroundColor = `rgba(73, 73, 73, ${alpha})`;
    });
  }
}); */
