function dealCardToPlayer() {
    let card = model.deck.pop()

    // All JavaScript arrays have a built-in "push" method that will add an item to
    // the end of the array. This is how we handle adding a card to a player's hand
    model.playerHand.push(card)
}

// This function will take one parameter, indicating the index of the card (within the
// player's hand) that the player has chosen to play. The card will be removed from the
// player's hand and added to the discard pile.



function compPlay() {
    // This will start an infinite loop
    while (getScore(model.compHand) < 17) {
        dealCardToComp()
    }
    if (getScore(model.compHand) > 21  || getScore(model.compHand) < getScore(model.playerHand)){
        model.state = "playerWin"
    } else {
        model.state = "compWin"
    }
}



function dealCardToComp() {
    let card = model.deck.pop()
    model.compHand.push(card)
}