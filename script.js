const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.message');
let currentPlayer = 'X';

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function handleClick(cell) {
    if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        if (checkWin()) {
            message.textContent = `${currentPlayer} wins!`;
            disableCells();
        } else if (checkDraw()) {
            message.textContent = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index - 1].textContent === currentPlayer;
        });
    });
}

function checkDraw() {
    return [...cells].every(cell => cell.textContent !== '');
}

function disableCells() {
    cells.forEach(cell => cell.removeEventListener('click', handleClick));
}

cells.forEach(cell => {
    cell.addEventListener('click', () => handleClick(cell));
});


const resetButton = document.querySelector('.reset')

function resetGame(){
    cells.forEach(cell =>{
        cell.textContent =''
    })

    currentPlayer = 'X';

    message.textContent="Player X's turn";

    cells.forEach(cell=>{
        cell.addEventListener('click',() =>handleClick(cell))
    })

}

resetButton.addEventListener('click',resetGame)
