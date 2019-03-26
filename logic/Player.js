module.exports = function(playerMoney, deckStack) {
    let newPlayer = {
        PStack: [],
        PMoney: playerMoney,
    };

    newPlayer.PStack.push(deckStack.pop());
    newPlayer.PStack.push(deckStack.pop());
    return newPlayer;
}