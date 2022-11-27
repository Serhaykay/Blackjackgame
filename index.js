let messageEl = document.getElementById('message-el')
let startEl = document.getElementById('start-el')
let sumEL = document.getElementById('sum-el')
let cardEl = document.getElementById('card-el')

let firstCard = 9
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

function startGame(){
    renderGame()
}


function renderGame(){
    sumEL.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " + cards[0]+" " + cards[1]

    if (sum <= 20){
        message = "Do you want to draw a new card"
    }else if (sum === 21){
        message = "wohoo! you've got Blackjack!"
    }else {
        message = "Oops! you're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    let card = 5
    sum += card
     
    renderGame()
}

















