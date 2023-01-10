const gameContainer = document.getElementById("game");
let card1 = null;
let card2 = null;
let cardFlipped = 0;
let notClicked = false; 


const COLORS = [
  "red",
  "blue",
  "yellow",
  "pink",
  "purple",
  "red",
  "blue",
  "yellow",
  "pink",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  //console.log(event.target);
  if( notClicked) return ;
  if (event.target.classList.contains("flipped")) return;

  // Change Background Color of card to be color of class it has
  
let yourCard = event.target;
  yourCard.style.backgroundColor = yourCard.classList[0]

  if (!card1 || !card2) {
    yourCard.classList.add("flipped");
    card1 = card1 || yourCard;
    card2 = yourCard === card1 ? null : yourCard; 
  } 
   
  if ( card1 && card2) {
  notClicked = true;
  //debugger
let cName1 = card1.className;
let CName2 = card2.className;
    
// Two matching cards is a match and stay face up
  
    if (cName1 === CName2) {
  cardFlipped += 2;
  card1.removeEventListener("click", handleCardClick);
  card2.removeEventListener("click", handleCardClick);
  card1 = null;
  card2 = null;
  notClicked = false;
} else {
   
  // Set timeot for two cards that are not matching 
  
  setTimeout(function() {
card1.style.backgroundColor = "";
card2.style.backgroundColor = "";
card1.classList.remove("flipped");
card2.classList.remove("flipped");
card1 = null;
card2 = null;
  notClicked = false;
},1000);
}
  };

};

// when the DOM loads
createDivsForColors(shuffledColors);

/* *///