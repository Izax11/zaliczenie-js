// funkcja tworząca talię kart
function dealHand() {
    let deck = [];
    let suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    let values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
  
    for (let suit of suits) {
      for (let value of values) {
        deck.push(value + ' of ' + suit);
      }
    }
  
    let hand = [];
    for (let i = 0; i < 5; i++) {
      let randomIndex = Math.floor(Math.random() * deck.length); // losowe dobieranie kart za pomocą metody Math.random()
      hand.push(deck[randomIndex]);
      deck.splice(randomIndex, 1);
    }
  
    return hand;
  }
  
  let hand = dealHand();
  console.log(hand);