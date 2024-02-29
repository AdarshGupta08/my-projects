let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // PlayerX, PlayerO
let count = 0;// to Track Draw

const WinP = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
     count = 0;
    StartBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            //playerO
            box.innerText = "O";
            turnO = false;
        } else {
            //playerX
            box.innerText = "X";
            turnO = true; 
        }
        box.disabled = true;
        count++;

        let isWin = checkWin();

        if (count === 9 && !isWin) {
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    exitboxes();
  };

const exitboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const StartBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulataion , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    exitboxes();
};

const checkWin = () => {
    for (let patterns of WinP) {
    
        let positionValue1 = boxes[patterns[0]].innerText;
        let positionValue2 = boxes[patterns[1]].innerText;
        let positionValue3 = boxes[patterns[2]].innerText;

        if (positionValue1 != "" && positionValue2 !="" && positionValue3 != "") {
            if (positionValue1 === positionValue2 && positionValue2 === positionValue3) {
                // console.log("WINNER WINNER CHICKEN DINNER" positionValue1);
                showWinner(positionValue1);
                return true;

            }
        }
    }
};

newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame)