//The following code words.
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
    
    for (i=1;i<6;i++){
        console.log(`Player Score: ${playerWins}. Computer Score: ${computerWins}.`)
        playRound();

        function playRound(playerSelection, computerSelection){
            userInput=prompt(`Type in Rock, Papers or Scissors. This is ${i} round out of 5.`);
            playerSelection=userInput.toLowerCase();  
            
            computerSelection=getComputerChoice();
            switch (computerSelection){
                case `rock`:
                    if (playerSelection===`paper`){
                        console.log(`You win. Paper beats rock.`);
                        playerWins++;
                    }
                    else if (playerSelection===`scissors`){
                        console.log(`You lose. Rock beats scissors.`);
                        computerWins++;
                    }
                    else{
                        console.log(`It's a tie.`)
                    }
                    break;   
                case `paper`:  
                    if (playerSelection===`scissors`){
                        console.log(`You win. Scissors beat paper.`);
                        playerWins++;
                    }
                    else if (playerSelection===`rock`){
                        console.log(`You lose. Paper beats rock.`);
                        computerWins++;
                    }
                    else{
                        console.log(`It's a tie.`)
                    }
                    break;        
                case `scissors`:  
                    if (playerSelection===`rock`){
                        console.log(`You win. Rock beat scissors.`);
                        playerWins++;
                    }
                    else if (playerSelection===`paper`){
                        console.log(`You lose. Scissors beat paper.`);
                        computerWins++;
                    }
                    else{
                        console.log(`It's a tie.`)
                    }
                    break;     
            }
        
        }
    }

    if (playerWins>computerWins){
        console.log(`You won the game! You accrued ${playerWins} victories.`)
    }
    else if (playerWins<computerWins){
        console.log(`You lost the game! The computer accrued ${computerWins} victories.`)
    }
    else if (playerWins===computerWins){
        console.log(`It's a tie.`)
    }
    else {
        console.error(`Error. Try again.`)
    }
}
playGame();




