const { disable } = require("express/lib/application");

document.getElementById('newcardel').disabled =true;

let age = document.getElementById('ageInput').value

function checkAge() {
    let msg = document.getElementById('entry')
    if (age < 21)
        msg.textContent = "Get outta here!"
    else    
        msg.textContent = "Welcome!"
}

function refreshPage(){
    document.getElementById('newcardel').disabled = true;
    window.location.reload();
} 

function bdayCardEligibility() {
    let msgElig = document.getElementById('isElig')

    if (age < 100) {
        msgElig.textContent = "Not eligible for birthday card though!"
    } else if (age == 100) {
        msgElig.textContent = "Congratulations! Here's your birthday card from the king!"
    } else {
        msgElig.textContent = "You've already received your birthday card from the king."
    }
}


let hasBlackJack = false
let isAlive = true
let cards = 1


function drawCard() {
    let firstCard = Math.floor(Math.random() * 10) + 2
    let secondCard = Math.floor(Math.random() * 10) + 2
    
    let sum = firstCard + secondCard
    let res = document.getElementById('result')

    let sumEl = document.querySelector('#sum-el')
    sumEl.textContent = "Sum : " + sum
    let cardEl = document.querySelector('#card-el')
    cardEl.textContent = "Cards : " + firstCard +" "+ secondCard 
    
    if (sum < 21) {
        res.textContent = sum + "... Click again to draw a new card.  [Alive]"
        
    } else if (sum === 21) {
        hasBlackJack = true
        res.textContent = "Congratulations! You've won!"
    } else {
        res.textContent = sum + " You've failed!"
        isAlive = false;
        res.textContent+=" [Not Alive]"
    }
}

function newCard() {
    console.log("Drawing a new card from the deck!")
    
    drawCard()
}

function startGame() {
    
    newCard()
    document.querySelector('#starter').disabled = true
    document.getElementById('newcardel').disabled =false;
    document.getElementById('newcardel').textContent = "NEW CARD"
    document.querySelector('#starter').textContent = "Game started!"
    // else {
    //     document.querySelector('#starter').disabled = true
    //     document.getElementById('newcardel').disabled =true;
    // }
}


    

