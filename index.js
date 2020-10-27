
const score1 = document.getElementById('score--0');
const score2 = document.getElementById('score--1');

const currentScore1 = document.getElementById('current--0')
const currentScore2 = document.getElementById('current--1')

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const dice = document.querySelector('.dice')

const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');

const Start =()=>{
    playing= true
    console.log('hi')
    dice.style.display ='none'
    score1.textContent =0;
    score2.textContent =0;
    currentScore = 0;
    activePlayer =0;
    document.querySelector(`.player--0`).classList.remove('player--winner')
    document.querySelector(`.player--1`).classList.remove('player--winner')
}

Start();
const scores = [0,0];

rollBtn.addEventListener('click', ()=>{
 
    if (playing){
        const random = Math.floor((Math.random() * 6)+1);
        dice.style.display ='block'
        dice.src= `dice-${random}.png`
        if (random !== 1){
            
            currentScore += random
            
            document.getElementById(`current--${activePlayer}`).textContent= currentScore;
        }else{
            nextPlayer()
        }
    }
    
})
holdBtn.addEventListener('click', ()=>{

    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]
    if (scores[activePlayer] >= 10 ){
        playing = false;
        dice.style.display ='none'
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    }
        nextPlayer()
    
})

newBtn.addEventListener('click', ()=>{
   
    Start()
})

const nextPlayer =()=>{
    

    document.getElementById(`current--${activePlayer}`).textContent= 0;

    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
    activePlayer  = activePlayer === 0 ? 1 :0;

    currentScore =0;
}

