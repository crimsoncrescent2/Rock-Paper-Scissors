






/* The following code works, but it prints out a 4th undefined variable 
and I think it's line 101 that is responsible or the computerSelection variable

function getComputerChoice(computerSelection){
 
    let computerRandomNumber=Math.floor((Math.random()*3)+1); //rolls a number between 1 and 3
    
    if (computerRandomNumber===1){
        return computerSelection="rock";   //assigns the 'rock' choice to the result of 1
    }
    else if(computerRandomNumber===2){
        return computerSelection="paper"; //assigns the 'paper' choice to the result of 2
    }
    else{
        return computerSelection="scissors"; //assigns the 'scissors' choice to the remaining option (result of 3)
    }
}


let playerWins=0;
let computerWins=0;

function playGame(){
    let playerSelection=prompt('Type in Rock, Paper or Scissors.'); //requests the user to input the choice
    playerSelection=playerSelection.toLocaleLowerCase(); //ignores case of the user input
    const computerSelection=getComputerChoice(); //generates the computer's choice

    function playRound(playerSelection, computerSelection){
        switch (playerSelection){
            case "rock":
                if (computerSelection=="paper"){
                    console.log(`Computer's choice was ${computerSelection}`);
                    console.log(`Your choice was ${playerSelection}`);
                    console.log(`You lose. Paper beats rock.`);
                    computerWins++;
                }
                else if (computerSelection=="scissors"){
                    console.log(`Computer's choice was ${computerSelection}`);
                    console.log(`Your choice was ${playerSelection}`);
                    console.log(`You win. Rock beats scissors.`);
                    playerWins++;
                }
                else {
                    console.log(`Computer's choice was ${computerSelection}`);
                    console.log(`Your choice was ${playerSelection}`);
                    console.log(`It is a tie.`);
                }
                break;
            
            case "paper":
                if (computerSelection=="scissors"){
                    console.log(`Computer's choice was ${computerSelection}`);
                    console.log(`Your choice was ${playerSelection}`);
                    console.log(`You lose. Scissors beat paper.`);
                    computerWins++;
                }
                else if (computerSelection=="rock"){
                    console.log(`Computer's choice was ${computerSelection}`);
                    console.log(`Your choice was ${playerSelection}`);
                    console.log(`You win. Paper beats rock.`);
                    playerWins++;
                }
                else {
                    console.log(`Computer's choice was ${computerSelection}`);
                    console.log(`Your choice was ${playerSelection}`);
                    console.log(`It is a tie.`);
                    playerWins++;
                }
                break;
            
            case "scissors":
                if (computerSelection=="rock"){
                    console.log(`Computer's choice was ${computerSelection}`);
                    console.log(`Your choice was ${playerSelection}`);
                    console.log(`You lose. Rock beats scissors.`);
                    computerWins++;
                }
                else if (computerSelection=="paper"){
                    console.log(`Computer's choice was ${computerSelection}`);
                    console.log(`Your choice was ${playerSelection}`);
                    console.log(`You win. Scissors beat paper.`);
                }
                else {
                    console.log(`Computer's choice was ${computerSelection}`);
                    console.log(`Your choice was ${playerSelection}`);
                    console.log(`It is a tie.`);
                }
                break;
        }
    }
    if (playerWins>computerWins){
        console.log(`Congratulations! You won! Your score is ${playerWins}`)
    }
    else if (playerWins<computerWins){
        console.log(`Alas! You lost! Your score is ${playerWins} against computer's ${computerWins}`);
    }

    
}

console.log(playGame());
*/



/*
for (let i=1; i<6; i++){
    console.log(`GAME ROUND: ${i}`);
    console.log(playRound(playerSelection, computerSelection));
}
*/


//console.log(playRound(playerSelection, computerSelection));




/* FAILED
function playRound(playerSelection, computerSelection){
    console.log(`The computer choice ${computerSelection}`);
    switch (computerSelection){
        case "rock":
            if (playerSelection==="Scissors"){
                console.log("You Lose! Rock beats scissors.");
            }
            else if (playerSelection==="Paper"){
                console.log("You Win! Paper beats rock.");
            }
            else {
                console.log("It is a tie.");
            }
            break;
        case "paper":
            if (playerSelection==="Rock"){
                console.log("You Lose! Paper beats rock.");
            }
            else if (playerSelection==="Scissors"){
                console.log("You Win! Scissors beats paper.");
            }
            else {
                console.log("It is a tie.");
            }
            break;
        case "scissors":
            if (playerSelection==="Paper"){
                console.log("You Lose! Scissors beat paper.");
            }
            else if (playerSelection==="Rock"){
                console.log("You Win! Rock beats Scissors.");
            }
            else {
                console.log("It is a tie.");
            }
            break;
    }
}

*/










/*  GOOD
let playerSelection="rock";
computerRandomNumber=Math.floor((Math.random()*3)+1); //rolls a number between 1 and 3


switch (computerRandomNumber){
    case 1:
        computerSelection="rock";
        if (playerSelection==="scissors"){
            console.log("You Lose! Rock beats scissors.");
        }
        else if(playerSelection==="paper"){
            console.log("You Win! Paper beats rock.");
        }
        else{
            console.log("It is a tie.");
        }
        break;

    case 2:
        computerSelection="paper";
        if (playerSelection==="rock"){
            console.log("You Lose! Paper beats rock.");
        }
        else if(playerSelection==="scissors"){
            console.log("You Win! Scissors beat paper.");
        }
        else{
            console.log("It is a tie.");
        }
        break;

    case 3:
        computerSelection="scissors";
        if (playerSelection==="paper"){
            console.log("You Lose! Scissors beat paper.");
        }
        else if(playerSelection==="rock"){
            console.log("You Win! Rock beats scissors.");
        }
        else{
            console.log("It is a tie.");
        }
        break;
    default:
        console.log("Error. Input either rock, paper or scissors as your choice.")
}

*/













