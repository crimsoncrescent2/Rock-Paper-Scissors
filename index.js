function getComputerChoice(computerSelection){
    let randomNumber=Math.floor(Math.random()*3+1);
    if (randomNumber===1){
        computerSelection='rock'
    }
    else if (randomNumber===2){
        computerSelection='paper'
    }
    else {
        computerSelection='scissors'
    }
    return computerSelection;
}


let playerWins=0;
let computerWins=0;
const computerSelection = getComputerChoice();


const mainBody=document.querySelector("body");
const rockBtn=document.createElement("button")
rockBtn.classList.add("buttons");
rockBtn.textContent="Rock";
mainBody.appendChild(rockBtn)

rockBtn.addEventListener("click", function(event){
    playRound(`rock`,getComputerChoice())
});

const paperBtn=document.createElement("button")
paperBtn.classList.add("buttons");
paperBtn.textContent="Paper";
mainBody.appendChild(paperBtn)

paperBtn.addEventListener("click", function(event){
    playRound(`paper`,getComputerChoice())
});

const scissorsBtn=document.createElement("button")
scissorsBtn.classList.add("buttons");
scissorsBtn.textContent="Scissors";
mainBody.appendChild(scissorsBtn)

scissorsBtn.addEventListener("click", function(event){
    playRound(`scissors`,getComputerChoice())
});



const resultDIV=document.createElement("div")
resultDIV.classList.add("result");
mainBody.appendChild(resultDIV)



function playRound(playerSelection, computerSelection){
        if (playerSelection===`rock` && computerSelection==`scissors`){
            playerWins++;
            resultDIV.textContent=`You won the round! Computer chose ${computerSelection}.
            Current score is ${playerWins}:${computerWins}`;
            
            endResult();    
        }
        if (playerSelection===`paper` && computerSelection==`rock`){
            playerWins++;
            resultDIV.textContent=`You won the round! Computer chose ${computerSelection}.
            Current score is ${playerWins}:${computerWins}`
            
            endResult();
        }
        if (playerSelection===`scissors` && computerSelection==`paper`){
            playerWins++;
            resultDIV.textContent=`You won the round! Computer chose ${computerSelection}.
            Current score is ${playerWins}:${computerWins}`
    
            endResult();
        }
        
        if (playerSelection===`scissors` && computerSelection==`rock`){
            computerWins++;
            resultDIV.textContent=`You lost the round! Computer chose ${computerSelection}.
            Current score is ${playerWins}:${computerWins}`
    
            endResult();
        }
        if (playerSelection===`rock` && computerSelection==`paper`){
            computerWins++;
            resultDIV.textContent=`You lost the round! Computer chose ${computerSelection}.
            Current score is ${playerWins}:${computerWins}`
    
            endResult();
        }
        if (playerSelection===`paper` && computerSelection==`scissors`){
            computerWins++;
            resultDIV.textContent=`You lost the round! Computer chose ${computerSelection}.
            Current score is ${playerWins}:${computerWins}`
    
            endResult();
        }
        if (playerSelection===computerSelection) {
            resultDIV.textContent=`It's a tie. Computer chose ${computerSelection}.
            Current score is ${playerWins}:${computerWins}`
        }
}

function endResult(){
    if (playerWins===5){
        resultDIV.textContent=`You had WON the game. You won ${playerWins} times. Meanwhile, the computer won ${computerWins} rounds.`
    }
    else if (computerWins===5){
        resultDIV.textContent=`You had LOST the game. Computer won ${computerWins} times. Meanwhile, you won ${playerWins} rounds.`
    }
}





