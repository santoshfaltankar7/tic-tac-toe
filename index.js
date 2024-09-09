let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winnerDisplay = document.querySelector("#winnerDisplay");
let turnO = true; 
let gameActive = true; 
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (gameActive) {
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true;
            checkwinners();
        }
    });
});


const checkwinners = () => {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

       
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                winnerDisplay.innerText = `Winner is ${pos1}`;
                gameActive = false;
                return;
            }
        }
    }

    
    const isDraw = [...boxes].every(box => box.innerText !== "");
    if (isDraw) {
        winnerDisplay.innerText = "It's a draw!";
        gameActive = false;
    }
};


reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.removeAttribute("disabled");
    });
    turnO = true;
    gameActive = true;
    winnerDisplay.innerText = ""; 
});

