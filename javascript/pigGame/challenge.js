/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// current player, round score, full score, dice
var activePlayer, roundScore, score, dice, diceTwo, previousDice, gamePlaying;

function init () {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    // Initializing Game
    // Change round score
    // document.querySelector('.dice').style.display = 'none';
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';

    //Set values to 0
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;

    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;

    //Refreshes names
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('#name-0').textContent = "Player 1";
    document.querySelector('#name-1').textContent = "Player 2";
}

init (); 

// Dice Picture and Current Score Change on Roll Dice button click
// Hit 1, resets current and switches player
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying) {
        //function: what you do when you click
        dice = Math.ceil(Math.random() * 6);
        diceTwo = Math.ceil(Math.random() * 6);
        console.log(roundScore);
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

        // Change dice
        var diceDom = document.querySelector('#dice-1');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';

        var diceDomTwo = document.querySelector('#dice-2');
        diceDomTwo.style.display = 'block';
        diceDomTwo.src = 'dice-' + diceTwo + '.png';

        
        //Player hits 1
        if (dice === 1 || diceTwo === 1) {
            nextPlayer();
        }

        else {
            roundScore = roundScore + dice + diceTwo;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            previousDice = dice;
        }



        // //Player hits 1
        // if (dice === 1) {
        //     nextPlayer();
        // }
              
        // else if (previousDice === 6 && dice === 6) {
        //     nextPlayer();
        // }

        // else {
        //     roundScore += dice;
        //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
        //     previousDice = dice;
        // }
    }
})

// Hold Button
    // Update current score added to total score
    // Current score goes to 0
    // Next player (dice also disappears)
    
    
    // Player wins
        // Change player name to Winner!
        // Remove active class
        // Add winner class

    // Changing javascript variables vs. changing dom elements

document.querySelector('.btn-hold').addEventListener('click', function(){ 
    if (gamePlaying) {
        scores [activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores [activePlayer];

        if (scores [activePlayer] > 100) {
            document.querySelector('#name-' + activePlayer).textContent = "Winner!";
            document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active'); 
            document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
            gamePlaying = false;
        }
        else {
            nextPlayer();

        }
    } 

})


document.querySelector('.btn-new').addEventListener('click', init);


function nextPlayer () {
    //Next player
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
    roundScore = 0;
    // previousDice = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';

}






/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/



