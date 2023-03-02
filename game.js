
// //cards array 
// const cards = [

// ]

//* flip card function
//class flip added to memory-card elements with  querySelectorAll. 
// loop through with for Each and attach Event listener - each time card is clicked flipCard function  is activated,  
// card clicked is represented with 'this' variable
// the function accesses the classList and adds the flip class
//* check match function
//each time player chooses 2 cards - 2 options match/not a match
//if cards match - keep facing up 
//if cards are not match- flip back over 
//*preventing bugs in game
//lockBoard to prevent from flipping over > 2 cards
//if (this === firstCard) return;  - to prevent double click creating match 
//resetBoard function to reset cards to null for next round

//cardIsFlipped function to manage flipped state 
const cards = document.querySelectorAll('.memory-card');
const timeLeft = document.querySelector('#time-left')
// const score = document.querySelector('#score')
const playGame = document.querySelector('#start-btn')
//display result
// const resultDisplay = document.createElement('h3')
// const gameGrid = document.getElementById('game')
// gameGrid.append(resultDisplay)

//game rounds
let hasFlippedCard = false;
let lockBoard = false;        
let firstCard, secondCard; 

//timer
let countDownTimerId = setInterval(countDown, 1000)
let currentTime = 30 

function flipCard() {
    // console.log('this', this);
    if (lockBoard) return;
    if (this === firstCard) return;    //to prevent double click creating match 

    this.classList.add('flip');
    console.log(hasFlippedCard);
    if (!hasFlippedCard) {        //checking hasFlippedCard in true state 
        //first click
        hasFlippedCard = true;
        firstCard = this;  //this = memory card
        return;
    }    
    //second click
        console.log('second click');
        secondCard = this;

        checkForMatch();
    }


    function checkForMatch(){ {
        let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
        if (isMatch) {
            console.log('its a match');
            disableCards()
        }  else {
            console.log('not a match');
             unflipCards();
        }    
    }


    // console.log('first card, second card', firstCard, secondCard);
    // console.log(firstCard.dataset.framework);
    // console.log(secondCard.dataset.framework);
    // console.log(disableCards);
    // console.log(unflipCards);

    //check for match if cards match remove 'click' event listener and flipCard function
    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
    }
    // if cards Not a match unflip cards - remove .flip class
    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoard();
        }, 1500);
    }
}
//resetBoard function,  call after each round
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// () immediately invoked shuffle function
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 8);
        card.style.order = randomPos;
    })
    currentTime = 30;
})(); 


cards.forEach(card => card.addEventListener('click', flipCard))

//* track time, find all matches in time = win otherwise lose 

function countDown() {
    currentTime --
    timeLeft.textContent = currentTime;

    if (currentTime === 0 && checkFlippedCards(cards)) {
        console.log("win");
        // resultDisplay.textContent.appendChild = "You Win!"
        // alert('Hooray! You Win!')
      } else {
        console.log("loss");
      }
      if (currentTime === 0) {
        clearInterval(countDownTimerId);
        console.log('Game Over!'); 
        // disableCards()
      } 

   
}

function checkFlippedCards(arr) {
    arr = Array.from(arr);
//    console.log(arr);
//    console.log(arr.every((card) => card.classList.contains("flip")));
    return arr.every((card) => card.classList.contains("flip"));
  }



//* score = how fast user finds all matches, & set high score.

//* add cards array, loop over and append to dom
