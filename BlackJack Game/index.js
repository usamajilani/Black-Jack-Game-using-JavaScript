 let cards = []

let hasblackjack = false
let isalive = true
let sum  = 0
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")


let player = {
     name: "Per",
     chips: 145

 }


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function start(){
   
    isalive = true
    let firstcard = getrandomcard()
    let secondcard = getrandomcard() 
    sum = firstcard + secondcard
    cards = [firstcard,secondcard]

    renderGame()

}


function renderGame(){
   
    cardEl.textContent = "Cards: "

    for(i = 0; i < cards.length; i++){
        
        cardEl.textContent +=  cards[i] + " "

    }
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20){
        message = "Do you want to darw a new card?"
        
       }
       else if(sum === 21){
           message = "YOU'VE GOT BLACK JACK"
           hasblackjack=true
       }
       else{
       
           message = "you are out of the game!"
           isalive=false
       }
       messageEl.textContent = message
}

function getrandomcard(){

    let randomnumber = Math.floor(Math.random() * 13) + 1
    
    if(randomnumber === 1){
        return 11
    }
    if(randomnumber > 10){

        return 10
    }
    else{
        
     return randomnumber
    }
}

function newcard(){

    if(isalive === true && hasblackjack === false){
    let newcard = getrandomcard()
    sum = sum + newcard
    sumEl.textContent = "Sum: " + sum
    cards.push(newcard)
    console.log("DRAWING A NEW CARD FROM THE DECK!")
    cardEl.textContent = "Cards: "
    renderGame()
    }
}

