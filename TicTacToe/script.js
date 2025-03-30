const container = document.getElementById('widget-container');
const playerWins = document.getElementsByClassName('player-wins');
const allBoxes = document.getElementsByClassName('box');
const playersTurn = document.getElementById('players-turn');
const resetBtn = document.getElementById('reset-btn');

let currentPlayer = 'X';
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let inputs = Array(9).fill(0)

container.addEventListener('click',(e)=>{
    e.target.textContent = currentPlayer;
    inputs[e.target.dataset.index] = currentPlayer
    checkWinner()
})


function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = inputs[condition[0]];
        const cellB = inputs[condition[1]];
        const cellC = inputs[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        playerWins[0].innerText = `${currentPlayer} wins!`
        console.log(`"${currentPlayer}" wins!`);
    }
    else if(!inputs.includes(0)){
        playerWins[0].innerText = "It's a draw"
    }
    else{
        currentPlayer = currentPlayer === 'X' ? '0' : 'X'
        playersTurn.innerText = `${currentPlayer}'s Turn!`
    }
}

resetBtn.addEventListener('click',(e)=>{
    for(let i=0;i<allBoxes.length;i++){
        allBoxes[i].textContent = '';
    }
    inputs = Array(9).fill(0)
    currentPlayer = 'X';
    playersTurn.innerText = `${currentPlayer}'s Turn!`
    
})

