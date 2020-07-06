/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dise;

//scores = [0,0];
//roundScore = 0;
//activiPlayer = 0;

//dice = Math.floor(Math.random() * 6) + 1;console.log(dice);

//document.querySelector('#current-'+activiPlayer).textContent = dice;
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click',function(){

    //1. random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice+'.png';

    //3. Update the round score if the rolled number was not a 1
    if(dice !== 1){
        //add score
        roundScore += dice;
        document.querySelector('#current-'+activiPlayer).textContent = roundScore;
    }
})