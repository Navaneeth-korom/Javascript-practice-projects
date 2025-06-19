let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newGame-btn")
let msgBox = document.querySelector(".msg-box")
let msgContainer = document.querySelector(".msg-container")

turnO = true;
let boxesFilled = 0;

let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked")
        if (turnO) {
            box.innerText = "O"
            turnO = false;
        }
        else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        boxesFilled++;
        checkWinner();
    })
})


const checkWinner = () => {
    for (let pattern of winningPattern) {
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("We have a winner");
                showWinner(pos1val);
                return
            }
            else if (boxesFilled === 9) {
                showDraw();
            }

        }
    }

}

const showWinner = (winner) => {
    msgContainer.classList.remove("hide")
    msgBox.innerText = `Game over, ${winner} Won`
    disableBoxes();
}
const showDraw = () => {
    msgContainer.classList.remove("hide")
    msgBox.innerText = "Game Draw"
}


const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
}


const resetGame = () => {
    turnO = true
    msgContainer.classList.add("hide")
    enableBoxes()
    boxesFilled = 0
    msgBox.innerText = ""
}

resetBtn.addEventListener("click", resetGame)
newGameBtn.addEventListener("click", resetGame)


