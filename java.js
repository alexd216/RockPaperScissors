// create global variables 
let playerScore = 0;
let computerScore = 0;



// function to randomly select computer choice
        function computerPlay() {
            const choices = ['rock', 'paper', 'scissors'];
            return choices[Math.floor(Math.random()*choices.length)];
            playRound();
        }

        // funciton to compare player selection against computer selection and output the result
        function playRound(playerSelection, computerSelection) {
            playerSelection = playerSelection.toLowerCase();
          if (playerSelection == computerSelection) {
            result = 'draw';
          }  if (playerSelection == 'paper' && computerSelection == 'rock') {
            result = 'You win! paper beats rock';
            playerScore ++;
          } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            result = 'You lose! scissors beats paper';
            computerScore ++;
          } else if (playerSelection == 'rock' && computerSelection == 'paper') {
            result = 'You lose! paper beats rock';
            computerScore ++;
          } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            result = 'you win! rock beats scissors';
            playerScore ++;
          } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            result = 'you lose! rock beats scissors';
            computerScore ++;
          } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            result = 'You win! scissors beats paper';
            playerScore ++;
          }
          return result;
        };

// function to keep the score and communicate the winner
function winner() {
          if (playerScore > computerScore) {
            winner = 'player';
          } else winner = 'computer';
          return winner;
        };
       

// function to play the game 5 times
        /*function game() {
            playerScore = 0;
            computerScore = 0;
          let counter = 0;
          for (counter; counter < 5; counter ++) {
            let computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            console.log(result);
            console.log('player ' + playerScore + ' and computer ' + computerScore );
          }
          console.log('the winner is ' + winner());
        };*/

// functions to assign the player selection to the button 
        function rock() {
            computerSelection = computerPlay();
            playerSelection = 'rock';
            playRound(playerSelection,computerSelection);
            };

        function paper() {
          computerSelection = computerPlay();
            playerSelection = 'paper';
            playRound(playerSelection,computerSelection);
            };

        function scissors() {
          computerSelection = computerPlay();
          playerSelection = 'scissors';
           playRound(playerSelection,computerSelection);
        };
