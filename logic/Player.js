module.exports = function(playerMoney){
    return {
        Hand: [],
        PMoney: playerMoney,

        hit: function(deckStack){
            this.Hand.push(deckStack.pop());
        },
        startHand: function(deckStack){
            this.Hand = [];
            this.hit(deckStack);
            this.hit(deckStack);
        },
    };
}