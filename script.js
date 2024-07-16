let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let winnerMsg = document.getElementById("winner");
let reset = document.getElementById("reset-btn");
let restart = document.getElementById("restart-btn");
let val1 = 0;
let val2 = 0;

let player1 = true;
let win = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach(e => {
    e.addEventListener("click", () => {
        win +=1;
        if (player1) {
            e.innerText = "X";
            player1 = false;
            val1 += 1;
        }
        else {
            e.innerText = "O";
            player1 = true;
            val2 += 1;
        }
        e.disabled = true;
        checkWinner();
        if(win == 9) winnerMsg.innerText = `Tie Game! No winner`;
    })
});



const disableBox = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    if (winner === "X")
        winnerMsg.innerText = `Winner is Player-01`;
    else
        winnerMsg.innerText = `Winner is Player-02`;
    disableBox();
}

const checkWinner = () => {
    for (pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                win = true;
                showWinner(val1);
            }
        }
    }
};

const restartBtn = () => {
    player1 = true;
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    winnerMsg.innerText = "";
    win = 0;
}

reset.addEventListener("click", restartBtn);
restart.addEventListener("click", restartBtn);

