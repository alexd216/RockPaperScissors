// create global variables 
let playerScore = 0;
let computerScore = 0;

// create the eventlisteners to add the score to the webpage
    const container = document.querySelector('#displayScore');
          

    const scoreHeading = document.createElement('div');
    scoreHeading.classList.add('scoreHeading');
    scoreHeading.textContent = 'The score is!';
    scoreHeading.style.fontSize = '20px';


    const computerScoreDisplay = document.createElement('h2');
    computerScoreDisplay.classList.add('computerScoreDisplay');
    computerScoreDisplay.textContent = 'Computer ' + computerScore;

    const playerScoreDisplay = document.createElement('h2');
    playerScoreDisplay.classList.add('playerDisplayScore');
    playerScoreDisplay.textContent = 'Player ' + playerScore;

    scoreHeading.appendChild(playerScoreDisplay);
    scoreHeading.appendChild(computerScoreDisplay);
    displayScore.appendChild(scoreHeading);

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
          return score(playerScore, computerScore);
          if (result == 'draw') {
            document.innerHTML = 'that was a draw';
          }
        };

// function to keep the score and communicate the winner
    function winner() {
          if (playerScore > computerScore) {
            winner = 'player';
          } else winner = 'computer';
          return winner;
        };
      
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

        //function to keep score updated and declare winner
    function score(playerScore, computerScore) {
      playerScoreDisplay.innerHTML = 'Player ' + playerScore;
      computerScoreDisplay.innerHTML = 'Computer ' + computerScore;
      displayScore.appendChild(scoreHeading);
   };