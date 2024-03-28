'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl   = document.querySelector('.dice');
const btnNew  = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0Activ =document.querySelector('.player--0')
const player1Activ =document.querySelector('.player--1')
const name1 =document.querySelector('#name--0')
const name2 =document.querySelector('#name--1')




score0El.textContent = 0;
score1El.textContent =0;

diceEl.classList.add('hidden')
const scores = [0 , 0]

let currentScore =0;
let activPlayer =0;
let playing =true;

const bx = function(){
    playing =false
    diceEl.classList.add('hidden')
}
const wx = function(){
    document.getElementById(`current--${activPlayer}`).textContent =0;
    currentScore= 0;
    activPlayer = activPlayer === 0 ? 1 : 0;
    /*    player1Activ.classList.toggle('player--active');
    player0Activ.classList.toggle('player--active');*/
            //toggleادا كان الكلاس موجود تزله والعكس صحيح
        if(activPlayer === 1 ){
            player1Activ.classList.add('player--active');
            player0Activ.classList.remove('player--active');
        }
        else{
            player1Activ.classList.remove('player--active');
            player0Activ.classList.add('player--active');
        }
}
const inti =function(){
    const rmv =mov =>mov.classList.remove('player--winner');
    scores[0] =0;
    scores[1] =0;
    score0El.textContent =0;
    score1El.textContent =0;
    document.getElementById(`current--0`).textContent =0;
    document.getElementById(`current--1`).textContent =0;
    currentScore= 0;
    diceEl.classList.add('hidden')
    activPlayer = 0;
    playing = true;
    r === 0?mov(player0Activ):mov(player1Activ);
    player1Activ.classList.remove('player--winner')

    player0Activ.classList.add('player--active');
    player1Activ.classList.remove('player--active');
}
btnRoll.addEventListener('click' , function(){
    if (playing){
        const dice = Math.trunc(Math.random() *6 ) +1 ;
        diceEl.classList.remove('hidden');
        diceEl.src = `./image/dice-${dice}.png`;
        if(dice !== 1){
        currentScore += dice;
        document.getElementById(`current--${activPlayer}`).textContent =currentScore;
        }
        else wx()
    }
});

let r =9;
btnHold.addEventListener('click' , function(){
    if(playing){
        scores[activPlayer] += currentScore;
        activPlayer === 0? score0El.textContent =scores[0] 
        : score1El.textContent =scores[1] ;
        wx()
            if(scores[0] >=100){
            bx()
            player0Activ.classList.add('player--winner')
            r =0;
        } else if (scores[1] >=100){
            bx()
            player1Activ.classList.add('player--winner')
            r =1;
        }
    }
}
)
btnNew.addEventListener('click' , inti)
/*****************/
const intro = document.querySelector('.intro')
const clos = document.querySelector('.clos')
const btata = document.querySelector('.btata')
intro.classList.add('hidden')

btata.addEventListener('click' , function(){
    intro.classList.remove('hidden')
})

clos.addEventListener('click' , function(){
    intro.classList.add('hidden')
})
