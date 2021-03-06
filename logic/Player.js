module.exports = function(playerMoney){
    return {
        Hand: [],
        Money: playerMoney,

        bet: function(amount) {
            this.Money -= amount;
        },
        resetHand: function() {
            this.Hand = [];
        },
        startHand: function(deckStack) {
            this.resetHand();
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
            this.Hand.forEach(card => {
                console.log(card);
            });
            new Promise(resolve => setTimeout(resolve, 100))
                .then(() => {return;});
        },
        doubleDown: function(runBet, deckStack) {
            this.bet(runBet);
            this.hit(deckStack);
        },
        calCardVals: function() {//player card vals
            let sum=[0,0];
            console.log('player');
            console.log(this.Hand);
            this.Hand.forEach(thisCard => {
                let card = thisCard.val;
                let cardN = card.slice(0,card.length-1);
                if(cardN == '1') {//if card is Ace
                    sum[1]= sum[0]+11;//optional val of Ace
                    sum[0]+= 1;
                }
                else if(cardN.length==1) {//if card is 2-9 inclusive
                    sum[0]+= parseInt(cardN);
                    if(sum[1]!=0){//if Ace is present
                        sum[1]+= parseInt(cardN);
                    }
                }
                else{//if card is face, via elim.
                    sum[0]+= 10;
                    if(sum[1]!=0){//if Ace is present
                        sum[1]+= 10;
                    }
                }
            });
            return sum;
        },
    };
}