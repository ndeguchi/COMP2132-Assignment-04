
//Natsu Deguchi

/*
grab some HTML elements
*/ 
const p01 = document.getElementById('p01');
const p02 = document.getElementById('p02');
const p03 = document.getElementById('p03');

/*
PART 1a
DEFINE A Card OBJECT
*/
class Card {

    constructor(face, value, suit){
        this.face  = face;
        this.value = value;
        this.suit  = suit;
    }

    describeSelf(){
        return `<img class="card" src="images/cards/${this.face}_of_${this.suit}s.svg" alt="${this.face} of ${this.suit}s. Value: ${this.value}">`;
    }
}

const c1 = new Card("King",10,"Heart");

p01.innerHTML += `<p>Demonstrate a Card Object:</p>`;
p01.innerHTML += `<p>${c1.describeSelf()}</p>`;


/*
PART 1b
INSTANTIATE A Card OBJECT and 
display the value returned by the describeSelf() function
*/


/*
PART 2a
DEFINE A Deck OBJECT
*/
class Deck{
    constructor(){
        
        //build a deck of Card objects
        //prepare arrays for all the aspects of a Card
        this.faces   = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];        
        this.values  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];        
        this.suits   = ["Spade","Club","Heart","Diamond"];  
        
        //prepare an array to store the Cards in
        this.cards = [];

        for(let i= 0; i < this.suits.length; i++){
            for(let j = 0; j < this.faces.length; j++){
               let aCard = new Card(this.faces[j], this.values[j], this.suits[i]); 
               this.cards.push(aCard);
            }
        }
        
        console.log("array for part 2");
        console.dir(this.cards);

        //use nested 'for' loops
        //build the Deck of Cards
        //one iteration for each suit
        //one iteration for each face/value pair
        //each time, instantiate a new Card
        //add new cards to the using Array.push()
        //eg:    this.cards.push( newCardObject );
       
    }            
    
}

/*
DEFINE Deck OBJECT FUNCTIONS
no changes need to be made here
*/
Deck.prototype.dealCard = function(){
 
    //remove and return the first item in array
    //and shift the index of remaining items 
    const card = this.cards.shift();
    //if we have run out of cards...
    if(card === undefined){
        return 'No more cards';
    }else{
        //return the next card in the array
        return card;
    }         
}
Deck.prototype.shuffle = function(){
 
    let j, x, i;
    //loop through the entire array
    for (i = this.cards.length - 1; i > 0; i--) {
        //randomly select a card
        j = Math.floor(Math.random() * (i + 1));
        x = this.cards[i];
        //resort cards
        this.cards[i] = this.cards[j];
        this.cards[j] = x;
    }
    //return the randomly sorted array
    return this.cards;       
}
Deck.prototype.describeSelf = function(){
    let description = "";
    description += `This deck of cards has ${this.cards.length} card(s) in it`;
    //return the above statement 'description'
    return description;
}

p02.innerHTML += `<p>Demonstrate Card Object:</p>`;

const deckOfCards = new Deck();

p02.innerHTML += `<p class="p1">${deckOfCards.describeSelf()}</p>`;

deckOfCards.shuffle();

myCard = deckOfCards.dealCard();
p02.innerHTML += `<p>You've been dealt a ${myCard.describeSelf()}</p>`;

p02.innerHTML += `<p class="p1">${deckOfCards.describeSelf()}</p>`;

myCard = deckOfCards.dealCard();
p02.innerHTML += `<p>You've been dealt a ${myCard.describeSelf()}</p>`;

p02.innerHTML += `<p class="p1">${deckOfCards.describeSelf()}</p>`;

myCard = deckOfCards.dealCard();
p02.innerHTML += `<p>You've been dealt a ${myCard.describeSelf()}</p>`;

p02.innerHTML += `<p class="p1">${deckOfCards.describeSelf()}</p>`;

myCard = deckOfCards.dealCard();
p02.innerHTML += `<p>You've been dealt a ${myCard.describeSelf()}</p>`;





/*
PART 2b
INVOKE AND DISPLAY Deck OBJECT FUNCTIONS
*/

//invoke and display the Deck function describeSelf() here...

//randomize the cards in the deck using shuffle()

//take the next card from the deck using dealCard()

//invoke and display the Deck function describeSelf() AGAIN here...

//take the next card from the deck using dealCard()

//invoke and display the Deck function describeSelf() AGAIN here...





/*
PART 3a
DEFINE A Player OBJECT
*/

class Player{

    constructor( name ){

        this.name = name;
        this.moreCards = [];
    }

    addCardToHand( card ){
        this.moreCards.push(card);
    }

    describeSelf(){
        let html = "";
        html += `<h2><img src="images/${this.name}.jpg" class="profile">${this.name}'s hand:</h2>`;
        
        html += `<ul calss="hand">`;
        this.moreCards.forEach(function(moreCard){
            html += `<li>${moreCard.describeSelf()}</li>`;
            
        });    
        html += `</ul>`;

        return html;
    }
}

p03.innerHTML += `<p>Demonstrate two Player Objects and dealing them five cards each....</p>`;


const newPlayer1 = new Player("joe");
const newPlayer2 = new Player("jane");

const newDeck   = new Deck();
newDeck.shuffle();


newPlayer1.addCardToHand(newDeck.dealCard());
newPlayer2.addCardToHand(newDeck.dealCard());
newPlayer1.addCardToHand(newDeck.dealCard());
newPlayer2.addCardToHand(newDeck.dealCard());
newPlayer1.addCardToHand(newDeck.dealCard());
newPlayer2.addCardToHand(newDeck.dealCard());
newPlayer1.addCardToHand(newDeck.dealCard());
newPlayer2.addCardToHand(newDeck.dealCard());
newPlayer1.addCardToHand(newDeck.dealCard());
newPlayer2.addCardToHand(newDeck.dealCard());



p03.innerHTML += newPlayer1.describeSelf();
p03.innerHTML += newPlayer2.describeSelf();

// let p2 = newDeck.dealCard();
// newPlayer2.addCardToHand(p2);
// p2 = newDeck.dealCard();
// newPlayer2.addCardToHand(p2);
// p2 = newDeck.dealCard();
// newPlayer2.addCardToHand(p2);
// p2 = newDeck.dealCard();
// newPlayer2.addCardToHand(p2);
// p2 = newDeck.dealCard();
// newPlayer2.addCardToHand(p2);

// p03.innerHTML += `<p class="p1">${newPlayer2.describeSelf()}</p>`;




/*
PART 3b
Instantiate Two Player OBJECTs
and deal five cards to each

display to the browser the contents 
of each player's hand
*/