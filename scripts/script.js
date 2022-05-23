// PAPER-SCISSORS-ROCK GAME 
// STARTING GAME
        
        function computerPlay() {
            let num = Math.floor((Math.random()*100) +1); //computer choses random number in range 1-100
                if (num >= 1 && num <= 33) {   //range is divide into three areas, each area has specific value
                   return 'paper';
                 } else if (num > 33 && num <= 66) {
                   return 'rock';
                 } else if (num > 66 && num < 100) {
                   return'scissors';
                 } else computerPlay() // 
        }        
            
        function round(input){  //function initializing round.
            let compValue = computerPlay();
            let playerSelection = input;
                playerSelection = playerSelection.toLowerCase();
                    roundAlgorithm(playerSelection, compValue);
        }

        function displayRoundResult(text) { //displaying result of round.
            const screen = document.querySelector('.info');
            const messege = document.createElement('p');
                messege.textContent = text; 
                screen.appendChild(messege);
        }

        function roundAlgorithm(playerSelection, compValue) { // round decision making algorithm
            if (playerSelection == 'paper' && compValue == 'rock') {
                displayRoundResult('Paper beats Rock - Player Wins !');
                playerWins += 1;
            } else if (playerSelection == 'paper' && compValue == 'scissors'){
                displayRoundResult('Paper loses against Scissors - Computer Wins !');
                compWins += 1;
            } else if (playerSelection == 'paper' && compValue == 'paper'){
                displayRoundResult('Paper and Paper - It\'s a draw');
            } else if (playerSelection == 'rock' && compValue == 'paper'){
                displayRoundResult('Rock loses against Paper - Computer wins !');
                compWins += 1;
            } else if (playerSelection == 'rock' && compValue == 'scissors'){
                displayRoundResult('Rock beats Scissors - Player Wins !');
                playerWins += 1;
            } else if (playerSelection == 'rock' && compValue == 'rock') {
                displayRoundResult('Rock and Rock = It\'s a draw !');
            } else if (playerSelection == 'scissors' && compValue == 'rock'){
                displayRoundResult('Scissors loses against Rock - Computer Wins !');
                compWins += 1;
            } else if (playerSelection == 'scissors' && compValue == 'paper'){
                displayRoundResult('Scissors beats Paper - Player Wins !');
                playerWins += 1;
            } else if (playerSelection == 'scissors' && compValue == 'scissors'){
                displayRoundResult('draw')
            } else {
                displayRoundResult('BUG!!!!!!!!')
            }
        }
        // begginign of the game
        const scoreboard = document.querySelector('.scoreboard')
        const information = document.createElement('p');
        const display = document.querySelector('#display');
            information.textContent = "To start a game, please chose your weapon to fight bad computer virus";
            scoreboard.insertBefore(information, display);
        
        let playerWins = 0;
        let compWins = 0;

        const player = document.querySelector('#player');
            player.textContent = playerWins;
        const computer = document.querySelector('#comp');
            computer.textContent = compWins;
        const paper = document.querySelector('#paper');
        const rock = document.querySelector('#rock');
        const scissors = document.querySelector('#scissors');
          
                  paper.addEventListener('click', function(){
                    information.textContent = 'Battle is in progress...'  
                    round('paper')
                    player.textContent = playerWins;
                    computer.textContent = compWins;
                        if (playerWins == 5){
                            alert('OVER !!!!');
                            information.textContent = 'It\'s Over Player Won !'
                        } else if (compWins == 5) {
                            alert('OVER !!!!');
                            information.textContent = 'It\'s Over Player Won !'
                        }
                  });
                  rock.addEventListener('click', function(){
                    information.textContent = 'Battle is in progress...' 
                      round('rock');
                      player.textContent = playerWins;
                      computer.textContent = compWins;
                      if (playerWins == 5){
                        alert('OVER !!!!');
                        information.textContent = 'It\'s Over Player Won !'
                    } else if (compWins == 5) {
                        alert('OVER !!!!');
                        information.textContent = 'It\'s Over Player Won !'
                    }
                  });
                  scissors.addEventListener('click', function(){
                    information.textContent = 'Battle is in progress...' 
                      round('scissors');
                      player.textContent = playerWins;
                      computer.textContent = compWins;
                      if (playerWins == 5){
                        alert('OVER !!!!');
                        information.textContent = 'It\'s Over Player Won !'
                    } else if (compWins == 5) {
                        alert('OVER !!!!');
                        information.textContent = 'It\'s Over Machine Won !'
                    }
                  });