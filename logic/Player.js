module.exports = function(playerMoney){
    return {
        Hand: [],
        Money: playerMoney,

        bet: function(initBet) {
            //TODO
        },
        startHand: function(deckStack) {
            this.Hand = [];
            this.hit(deckStack);
            this.hit(deckStack);
        },
        is21: function() {//player win condition
            let sum =  this.calCardVals();
            return sum[0] == 21 || sum[1] == 21;
        },
        isBust: function() {
            let sum = this.calCardVals();
            return sum[0] > 21;
        },
        hit: function(deckStack) {
            this.Hand.push(deckStack.pop());
        },
        doubleDown: function(runBet) {
            //TODO
        },

        calCardVals: function() {//player card vals
            let sum=[0,0];
            // for(let i = 0; i < this.Hand.length; i++) {//for the length of the hand
            //     let card = this.Hand[i];
            //     let cardN = card.slice(0,card.length-1);
            //     if(cardN.equals('1')) {//if card is Ace
            //         sum[0]+= 1;
            //         sum[1]+= sum[0]+11;//optional val of Ace
                    
            //     }
            //     else if(cardN.length==1) {//if card is 2-9 inclusive
            //         sum[0]+= parseInt(cardN);
            //         if(sum[1]!=0){//if Ace is present
            //             sum[1]+= parseInt(cardN);
            //         }
            //     }
            //     else{//if card is face, via elim.
            //         sum[0]+= 10;
            //         if(sum[1]!=0){//if Ace is present
            //             sum[1]+= 10;
            //         }
            //     }
            // }
            return sum;
        },
    };
}