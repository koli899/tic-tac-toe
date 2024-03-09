let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector(".newgameBtn");
let msgContanier = document.querySelector(".winning-container");
let winningMsg = document.querySelector(".winning-msg")
let container = document.querySelector(".container");
let turnO = true;
let count = 0 ;
const winningPattern = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

container.classList.remove("hideGame");
boxes.forEach((box) => {
    
    box.addEventListener("click",() =>{
       if(turnO){
        box.innerText = "O";
        turnO = false;
       }
       else{
        box.innerText = "X";
        turnO = true;
       } 
       box.disabled = true;
       count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner){
            container.classList.add("hideGame");
            gameDraw();
        }
    });
}); 


const gameDraw = () => {
    winningMsg.innerText = `Game Was Draw`
        msgContanier.classList.remove("hide");
      
        disabledBtn();
}
const rsetBtn = () => {
    turnO = true
    enableBtn();
    container.classList.remove("hideGame");
    msgContanier.classList.add("hide");
}
const disabledBtn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBtn = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
        winningMsg.innerText = `congratulations , Winner is ${winner}`
        msgContanier.classList.remove("hide");
        container.classList.add("hideGame");
        disabledBtn();
}
const checkWinner = () => {
    for(let pattern of winningPattern){
       let pos1Val = boxes[pattern[0]].innerText;
       let pos2Val = boxes[pattern[1]].innerText;
       let pos3Val = boxes[pattern[2]].innerText;
       if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
       if (pos1Val === pos2Val && pos2Val === pos3Val ){
        console.log("winner",pos1Val);
        showWinner(pos1Val);
       }
    }
    }
};
resetBtn.addEventListener("click",rsetBtn);
newGame.addEventListener("click",rsetBtn);

       
    
    
        
    

       
    
    
        
    
