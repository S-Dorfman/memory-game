
// //cards array 
// const cards = [

// ]

//* flip card function
//class flip added to memory-card elements with  querySelectorAll. 
// loop through with for Each and attach Event listener - each time card is clicked flipCard function  is activated,  
// card clicked is represented with 'this' variable
// the function accesses the classList and toggles the flip class
const cards = document.querySelectorAll('.memory-card');

function flipCard() {
    this.classList.toggle('flip')
}

cards.forEach(card => card.addEventListener('click', flipCard))

console.log(cards);


//* check match function
//cardIsFlipped function to


//* track moves or time 
