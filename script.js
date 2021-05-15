const statusDisplay = document.querySelector('.game-status');

let gameActive = true;
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
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

const winningMess = () => `Congratulations! ${currentPlayer} won!`;
const drawMess = `It's a tie!`;
const currPlayerTurn = () => `It's ${currentPlayer} turn.`;

statusDisplay.innerHTML = currPlayerTurn();

const playerChange = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.innerHTML = currPlayerTurn();
};

const cellPlayed = (clickedCell, cellIndex) => {
    // Ustawiam gdzie w gameState ma się pojawić symbol obecnego gracza
    gameState[cellIndex] = currentPlayer;
    // Wstawia w miejsce klikniętej komórki symbol obecnego gracza
    clickedCell.innerHTML = currentPlayer;
};


const resultValid = () => {
    let roundWon = false;
    /*Iteruje po gameState i kolejno do a, b, c przypisuje pozycje graczy i porównuje
    je do kombinacji wygrywających*/
    for (i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];

        if (a === '' || b === '' || c === '') continue;
        // jeśli a, b, c są tego samego symbolu to runda się kończy
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }
    console.log(gameState)
    // jeśli roundWon = true to wyświetla komunikat o zwycięzcy i zwraca funkcje
    if (roundWon) {
        statusDisplay.innerHTML = winningMess();
        gameActive = false;
        return;
    };

    let roundDraw = !gameState.includes('');
    if (roundDraw) {
        statusDisplay.innerHTML = drawMess;
        gameActive = false;
        return;
    }

    playerChange();
};

const cellClick = e => {
    const clickedCell = e.target;
    // Przypisuje do zmiennej index data-cell-index
    const cellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[cellIndex] !== '' || !gameActive) {
        return;
    }
    cellPlayed(clickedCell, cellIndex);
    resultValid();
};

const restartGame = () => {
    gameActive = true;
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    statusDisplay.innerHTML = currPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = '');
};

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelector('.restart-btn').addEventListener('click', restartGame);
