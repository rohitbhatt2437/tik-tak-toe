let buttons = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("#reset-btn");
let newgamebtn = document.querySelector("#newgame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
 
const winPattern = [
    [0, 1, 2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]  
];

const resetgame = () => {
    turnO = true;
    enablebtns();
    msgContainer.classList.add("hide");
}

buttons.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disablebtns = ()=>{
    for(let btn of buttons){
        btn.disabled = true;
    }
}

const enablebtns = ()=>{
    for(let btn of buttons){
        btn.disabled = false;
        btn.innerText="";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebtns();
}

const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1 = buttons[pattern[0]].innerText;
        let pos2 = buttons[pattern[1]].innerText;
        let pos3 = buttons[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2===pos3){
                console.log("winner", pos1);
                showWinner(pos1);
            }
        }
    }
};      

newgamebtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);
