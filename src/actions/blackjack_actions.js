// will need to export these functions eventually maybe individually?


export function fetchDeck(){
  return {
    type: 'FETCH_DECK'
  }
  // this is an action creator! redux, second lab - read it.
}

export function setAICards(state){
  // deck is nested inside of state
  // var ourDeck = Array.from(state.deck)
  var ourDeck = [...state.deck]
  // [obj, obj, obj]

  var card1 = ourDeck[Math.floor(Math.random() * ourDeck.length - 1)];
    //take card out of deck
    // var newDeck = takeOutCard(card1, ourDeck)
  ourDeck.splice(ourDeck.indexOf(card1), 1)

  var card2 = ourDeck[Math.floor(Math.random() * ourDeck.length - 1)];
    // var newDeck2 = takeOutCard(card1, newDeck)
  ourDeck.splice(ourDeck.indexOf(card2), 1)
    //take card out of deck
  // var randCards =
  // debugger
  return {
    type: 'SET_AI_CARDS',
    payload: {aiCards: [card1, card2], deck: ourDeck}
  }
}


export function setUserCards(state){
  // deck is nested inside of state
  var ourDeck = [...state.deck]

  var card1 = ourDeck[Math.floor(Math.random() * ourDeck.length - 1)];

  ourDeck.splice(ourDeck.indexOf(card1), 1)

  var card2 = ourDeck[Math.floor(Math.random() * ourDeck.length - 1)];

  ourDeck.splice(ourDeck.indexOf(card2), 1)

  return {
    type: 'SET_USER_CARDS',
    payload: {userCards: [card1, card2], deck: ourDeck}
  }

}

export function hitAI(deck){

  var card = deck[Math.floor(Math.random() * deck.length)];

  return {
    type: 'HIT_AI', payload: card
  }

}

export function hitUser(deck){

  var card = deck[Math.floor(Math.random() * deck.length)];

  return {
    type: 'HIT_USER', payload: card
  }

}
