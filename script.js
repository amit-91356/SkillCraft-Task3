const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restart");

let currentPlayer = "X";
let gameActive = true;
let board = ["","","","","","","","",""];

const winPatterns = [
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]
];

cells.forEach((cell,index)=>{
    cell.addEventListener("click",()=>{
        if(board[index]!=="" || !gameActive) return;

        board[index]=currentPlayer;
        cell.textContent=currentPlayer;

        checkWinner();

        currentPlayer=currentPlayer==="X"?"O":"X";
        statusText.textContent=`Player ${currentPlayer} Turn`;
    });
});

function checkWinner(){
    for(let pattern of winPatterns){
        let [a,b,c]=pattern;

        if(board[a] &&
           board[a]===board[b] &&
           board[a]===board[c]){
            statusText.textContent=`Player ${board[a]} Wins!`;
            gameActive=false;
            return;
        }
    }

    if(!board.includes("")){
        statusText.textContent="Draw!";
        gameActive=false;
    }
}

restartBtn.addEventListener("click",()=>{
    board=["","","","","","","","",""];
    gameActive=true;
    currentPlayer="X";
    statusText.textContent="Player X Turn";

    cells.forEach(cell=>{
        cell.textContent="";
    });
});
