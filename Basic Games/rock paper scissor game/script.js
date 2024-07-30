let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    const choice=["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return choice[randIdx];
}

const userPoint=document.querySelector("#user-score");
const compPoint=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userPoint.innerText=userScore;
        msg.innerText=`You Win!`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compPoint.innerText=compScore;
        msg.innerText=`You loss!`;
        msg.style.backgroundColor="red";
    }
}

const drawGame=()=>{
    msg.innerText=`Game was Draw. Play again`;
    msg.style.backgroundColor="rgb(7, 9, 29)"
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice)
        drawGame();
    else{
        let userWin=true;
        if(userChoice==="rock")//paper & scissors
            userWin=compChoice==="paper"?false:true;
        else if(userChoice==="paper")//rock & scissors
            userWin=compChoice==="scissors"?false:true;
        else //rock & paper
            userWin=compChoice==="rock"?false:true;
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
