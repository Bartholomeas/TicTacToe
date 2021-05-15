const statusDisplay = document.querySelector('.game-status');

let gameActive = true;
let currentPlayer = 'X';
const gameState = ['', '', '', '', '', '', '', '', '',];
let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

const winningMess = `Congratulations! ${currentPlayer} won!`;
const drawMess = `It's a tie!`;
const currPlayerTurn = `It's ${currentPlayer} turn.`;

statusDisplay.innerHTML = currPlayerTurn;


const cellPlayed = (clickedCell, cellIndex) => {
    gameState[cellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
};

const playerChange = () => { };

const resultValid = () => {
    let roundWon = false;
    for (i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        // console.log(a)
        let b = gameState[winCondition[1]];
        // console.log(b)
        let c = gameState[winCondition[2]];
        // console.log(c)
        if (a === '' || b === '' || c === '') continue;
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }
    console.log(gameState)
    if (roundWon) {
        statusDisplay.textContent = winningMess;
    }
};

const cellClick = e => {
    const clickedCell = e.target;
    const cellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[cellIndex] !== '' || !gameActive) {
        return;
    }

    cellPlayed(clickedCell, cellIndex);
    resultValid();
};

const restartGame = () => { };

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelector('.restart-btn').addEventListener('click', restartGame);
