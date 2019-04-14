module.exports = function(playerMoney){
    return {
        Hand: [
            {id: 0, val: 'any'},
            {id: 0, val: 'any'}
        ],
        Money: playerMoney,

        bet: function(amount) {
            this.Money -= amount;
        },
        resetHand: function() {
            this.Hand = [
                {id: 0, val: 'any'},
                {id: 0, val: 'any'}
            ];
        },
        revealHand: function(deckStack){
            for(let i = 0; i<2; i++){
                this.Hand[i] = deckStack.pop();
                new Promise(resolve => setTimeout(resolve, 100))
                    .then(() => {return;});
            }
        }
    };
}