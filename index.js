
const score1 = document.getElementById('score--0');
const score2 = document.getElementById('score--1');
const currentScore1 = document.getElementById('current--0')
const currentScore2 = document.getElementById('current--1')

const dice = document.querySelector('.dice')

const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');


score1.textContent =0;
score2.textContent =0;
dice.style.display ='none'

let currentScore = 0;
let activePlayer =0;

rollBtn.addEventListener('click', ()=>{

    const random = Math.floor((Math.random() * 6)+1);
    dice.style.display ='block'
    dice.src= `dice-${random}.png`
    if (random !== 1){
        
        currentScore += random
        
        document.getElementById(`current--${activePlayer}`).textContent= currentScore;
    }else{

        document.getElementById(`current--${activePlayer}`).textContent= 0;

        document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active')
        activePlayer  = activePlayer === 0 ? 1 :0;

        currentScore =0;
       
    }
})