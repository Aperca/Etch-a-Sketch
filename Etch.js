

const container = document.querySelector('.container');

function createGrid(size) {
    container.innerHTML = '';  // Clear previous grid
    const squareSize = 640 / size;  // Calculate square size

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-square');
        cell.style.width = `${squareSize}px`;
        cell.style.height = `${squareSize}px`;

        // Hover effect to change color
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'purple';
        });
        
        container.appendChild(cell);
    }
}

function createNewGrid() {
    let size = prompt('Enter grid size (up to 100)');
    if (size > 100 || size < 1 || isNaN(size)) {
        alert('Please enter a valid number between 1 and 100!');
    } else {
        createGrid(size);  // Create new grid with given size
    }
}

createGrid(16);  // Initial default grid

const newButton = document.getElementById('newBtn');
const resetButton = document.getElementById('resetBtn');

newButton.addEventListener('click', createNewGrid);
resetButton.addEventListener('click', () => createGrid(16));  // Reset to default grid
