// PAPER-SCISSORS-ROCK GAME 
// STARTING GAME
    // COMPUTER CHOSING HIS TYPE
        // WHEN STARTING GAME, COMPUTER MUST SET VARIABLE CONTAINING HIS CHOICE FROM ONE OF THREE POSSIBLE OUTPUTS
        // POSSIBLE OUTPUTS ARE SCISSORS-PAPER-ROCK. CHOICE IS A FUNCTION WITH RANDOM AND EQUAL POSSIBILITY SELECTION. 
        

        function computerPlay() {
            // COMPUTER MUST CHOSE RUNDOM NUMBER IN THE RANGE FROM 1 TO 100.
        let num = Math.floor((Math.random()*100) +1);
        // RANGE IS DIVDED INTO THREE SUBRANGES 
        // EACH SUBRANGE HAS ITS STRING VALUE 
         if (num >= 1 && num <= 33) {
           return 'paper';
            ;
         } else if (num > 33 && num <= 66) {
           return 'rock';
            ;
         } else if (num > 66 && num < 100) {
           return'scissors';
            ;
         } else computerPlay()
        }        
    
        
// PLAYING GAME
    // COMPARING BOTH CHOISES
         // COMPUTER TAKES BOTH playerSelection AND compValue AND CHEKS CONDITION FOR WINNIG. 
         // BASING ON COMPARISON RULES, COMPUTER IS CHOSING THE WINNER OF ROUND AND RETURN POINT TO WINNER

        function round(){
        let compValue = computerPlay();
        let playerSelection = prompt('Type your pick !');
        playerSelection = playerSelection.toLowerCase();
        roundAlgorithm(playerSelection, compValue);
        }

        // BRAIN OF DECISION-MAKING

        function roundAlgorithm(playerSelection, compValue) {
        if (playerSelection == 'paper' && compValue == 'rock') {
            alert('Paper beats Rock - Player Wins !');
            playerWins += 1;
        } else if (playerSelection == 'paper' && compValue == 'scissors'){
            alert('Paper loses against Scissors - Computer Wins !');
            compWins += 1;
        } else if (playerSelection == 'paper' && compValue == 'paper'){
            alert('Paper and Paper - It\'s a draw');
        } else if (playerSelection == 'rock' && compValue == 'paper'){
            alert('Rock loses against Paper - Computer wins !');
            compWins += 1;
        } else if (playerSelection == 'rock' && compValue == 'scissors'){
            alert('Rock beats Scissors - Player Wins !');
            playerWins += 1;
        } else if (playerSelection == 'rock' && compValue == 'rock') {
            alert('Rock and Rock = It\'s a draw !');
        } else if (playerSelection == 'scissors' && compValue == 'rock'){
            alert('Scissors loses against Rock - Computer Wins !');
            compWins += 1;
        } else if (playerSelection == 'scissors' && compValue == 'paper'){
            alert('Scissors beats Paper - Player Wins !');
            playerWins += 1;
        } else if (playerSelection == 'scissors' && compValue == 'scissors'){
            alert('draw')
        } else {
            alert('BUG!!!!!!!!')
        }
        }

        //GAME STRUCTURE  
        
        let playerWins = 0;
        let compWins = 0;

        while (playerWins < 5 && compWins < 5) {
            round();
        } 
        
        if (playerWins > compWins) {
            alert(`Player Won ! Result is Player: ${playerWins} - ${compWins} : Computer`)
        } else {
            alert(`Computer Won ! Result is Player: ${playerWins} - ${compWins} : Computer`)
        }

