const statusDisplay = document.querySelector('.game-status');

let gameActive = true;
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningMess = `Congratulations! ${currentPlayer} won!`;
const drawMess = `It's a tie!`;
const currPlayerTurn = `It's ${currentPlayer} turn.`;

statusDisplay.innerHTML = currPlayerTurn;


const cellPlayed = () => { };

const playerChange = () => { };

const resultValid = () => { };

const cellClick = e => {

    const clickedCell = e.target;
    const cellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
console.log(cellIndex)
    if (gameState[cellIndex] !== '' || !gameActive) {
        return;
    }
};
// const cellClick = e => {

//     const clickedCell = e.target;
//     const cellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

// console.log(clickedCell)
// console.log(cellIndex)

//     if (gameState[cellIndex] !== '' || !gameActive) {
//         return;
//     }

//     cellPlayed(clickedCell, cellIndex);
//     resultValid();
// };

const restartGame = () => { };

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelector('.restart-btn').addEventListener('click', restartGame);
