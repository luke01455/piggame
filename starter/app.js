/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, lastRolls;

init();


document.querySelector('.btn-roll').addEventListener('click', function(){
        nextRoll();
    });

function nextRoll() {
    if(gamePlaying) {
   // 1 . make random number
   var dice = Math.floor(Math.random()*6)+1;
   var dice2 = Math.floor(Math.random()*6)+1;
   //2 . display the result
   var diceDOM = document.querySelector('.dice');
   diceDOM.style.display = 'block';
   diceDOM.src = 'dice-' + dice + '.png';
   var diceDOM2 = document.querySelector('.dice1');
   diceDOM2.style.display = 'block';
   diceDOM2.src = 'dice-' + dice2 + '.png';

   //3 . update round score but only if the rolled number was not a 1
   if (dice > 1 && dice2 > 1) {
       roundScore = roundScore + dice + dice2;
document.querySelector('#current-' + activePlayer).textContent = roundScore; 
  
   } else {
       //reset score
   nextPlayer();
   }}}

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        console.log(lastRolls);
        var winScore = document.getElementById('winning-score').value;
        console.log(winScore);
        if(winScore){
            if (scores[activePlayer] >= winScore){            
                win();
                }
                else {
                    nextPlayer(); 
                }
        }
        else {
            winScore=20;
            if (scores[activePlayer] >= winScore){            
                win();
                }
                else {
                    nextPlayer(); 
                }
        }
        
    }
});

function win() {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = ('none');
        document.querySelector('.dice1').style.display = ('none');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
}

function nextPlayer(){
    roundScore = 0;
    document.getElementById('current-0').textContent = roundScore;
    document.getElementById('current-1').textContent = roundScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = ('none');
    document.querySelector('.dice1').style.display = ('none');
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
gamePlaying = true;
scores = [0, 0];
lastRolls = [0, 0];
roundScore = 0;
activePlayer = 0;


document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice1').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('#name-0').textContent = 'Player 1';
document.querySelector('#name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('active')
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

}












//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;
















