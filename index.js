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


function playGame(){
    let playerWins=0;
    let computerWins=0;

    for(let rounds=1; rounds<6; rounds++){
        playerSelection=prompt(`Let's play Rock, Paper and Scissors. 
Type in Rock, Papers or Scissors.
This is round ${rounds} out of 5.`);
        //playerSelection=userInput;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)

        function playRound(playerSelection, computerSelection){
            const playerSelectionLowerCase=playerSelection.toLowerCase();
            if (playerSelectionLowerCase===`rock` && computerSelection==`scissors`){
                playerWins++;
                console.log(`You won! You had won ${playerWins} rounds in total.`)
    
                return result=`Victory`
                
            }
            if (playerSelectionLowerCase===`paper` && computerSelection==`rock`){
                playerWins++;
                console.log(`You won! You had won ${playerWins} rounds in total.`)
    
                return result=`Victory`
            }
            if (playerSelectionLowerCase===`scissors` && computerSelection==`paper`){
                playerWins++;
                console.log(`You won! You had won ${playerWins} rounds in total.`)
    
                return result=`Victory`
            }
        
            if (playerSelectionLowerCase===`scissors` && computerSelection==`rock`){
                computerWins++;
                console.log(`You lost! You had won ${playerWins} rounds in total.`)
    
                return result=`Loss`
            }
            if (playerSelectionLowerCase===`rock` && computerSelection==`paper`){
                computerWins++;
                console.log(`You lost! You had won ${playerWins} rounds in total.`)
    
                return result=`Loss`
            }
            if (playerSelectionLowerCase===`paper` && computerSelection==`scissors`){
                computerWins++;
                console.log(`You lost! You had won ${playerWins} rounds in total.`)
    
                return result=`Loss`
            }
            else {
                console.log(`It's a tie.`)
                return result=`Tie`
            }
        }
    }
    if (playerWins>computerWins){
        console.log(`You had won the game. You won ${playerWins} times.`)
    }
    else if (playerWins<computerWins){
        console.log(`You had lost the game. Computer won ${computerWins} times.`)
    }
}

playGame()