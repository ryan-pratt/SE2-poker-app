module.exports = function(playerMoney, deckStack) {
    let newPlayer = {
        PStack: [],
        PMoney: playerMoney,

        is21: function() {
            //TODO
        },
        hit: function() {
            //TODO
        }
    };

    newPlayer.Pstack.push(deckStack.pop());
    newPlayer.Pstack.push(deckStack.pop());
    return newPlayer;
}