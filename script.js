let grid = document.getElementsByClassName("grid");
let turn = true;
let winner = false;
let boardNull = 0;
let board = [null,null,null,null,null,null,null,null,null];

function winX() {
    document.getElementById("turn").innerHTML = "Winner - X ";
    alert("Winner is - X ");
    winner = true;
    document.getElementById("wait").innerHTML = "Reloading...";
    setTimeout(() => {
        location.reload();
    }, 1500);
}
function winO() {
    document.getElementById("turn").innerHTML = "Winner - O ";
    alert("Winner is - O ");
    winner = true;
    document.getElementById("wait").innerHTML = "Reloading...";
    setTimeout(() => {
        location.reload();
    }, 1500);
}

function checkWinner() {
    if (board[0] === "X" && board[1] === "X" && board[2] === "X") 
        winX();
    if (board[3] === "X" && board[4] === "X" && board[5] === "X")
        winX();
    if (board[6] === "X" && board[7] === "X" && board[8] === "X")
        winX();
    if (board[0] === "X" && board[3] === "X" && board[6] === "X")
        winX();
    if (board[1] === "X" && board[4] === "X" && board[7] === "X")
        winX();
    if (board[2] === "X" && board[5] === "X" && board[8] === "X")
        winX();
    if (board[0] === "X" && board[4] === "X" && board[8] === "X")
        winX();
    if (board[2] === "X" && board[4] === "X" && board[6] === "X")
        winX();
    
    
    if (board[0] === "O" && board[1] === "O" && board[2] === "O") 
        winO();
    if (board[3] === "O" && board[4] === "O" && board[5] === "O")
        winO();
    if (board[6] === "O" && board[7] === "O" && board[8] === "O")
        winO();
    if (board[0] === "O" && board[3] === "O" && board[6] === "O")
        winO();
    if (board[1] === "O" && board[4] === "O" && board[7] === "O")
        winO();
    if (board[2] === "O" && board[5] === "O" && board[8] === "O")
        winO();
    if (board[0] === "O" && board[4] === "O" && board[8] === "O")
        winO();
    if (board[2] === "O" && board[4] === "O" && board[6] === "O")
        winO();
    
    if (boardNull >= 9)
        if (winner === false) {
            document.getElementById("turn").innerHTML = "It is a TIE !!";
            alert("It is a TIE !!");
            winner = true;
            document.getElementById("wait").innerHTML = "Reloading...";
            setTimeout(() => {
                location.reload();
            }, 1500);
        }
}

for (let i=0;i<grid.length;i++) {
    grid[i].addEventListener("click", e => {
        //console.log(e.target.id);
        if (turn === true) {
            if (board[e.target.id] === null) {
                boardNull++;
                document.getElementById(e.target.id).innerHTML = "X";
                document.getElementById("turn").innerHTML = "Next Turn - O";
                board[e.target.id] = "X";
                turn = false;
            }
        } else {
            if (board[e.target.id] === null) {
                boardNull++;
                document.getElementById(e.target.id).innerHTML = "O";
                document.getElementById("turn").innerHTML = "Next Turn - X";
                board[e.target.id] = "O";
                turn = true;
            }
        }
        checkWinner();
    });
}