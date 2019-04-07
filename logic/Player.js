module.exports = function(playerMoney){
    return {
        Hand: [],
        PMoney: playerMoney,

        bet: function(player,InitBet){
            //TODO
        },
        startHand: function(deckStack){
            this.Hand = [];
            this.hit(deckStack);
            this.hit(deckStack);
        },
        is21: function(player) {//player win condition
            var sum =  calPCardVals(player);
            if (sum[0]==21||sum[1]==21){
                return true;
            }
            return false;
        },
        isBust: function(player){
            var sum = calPCardVals(player);
            if(sum[0]>21){
                return true;
            }
            return false;
        },
        hit: function(deckStack){
            this.Hand.push(deckStack.pop());
        },
        doubleDown: function(player,runBet){
            //TODO
        },

        calCardVals: function(player){//player card vals
            var sum=[0,0];
            for(let i = 0; i < player.PStack.length; i++){//for the length of the hand
                var card = player.PStack[i];
                var cardN = card.slice(0,card.length-1);
                if(cardN.equals('1')){//if card is Ace
                    sum[0]+= 1;
                    sum[1]+= sum[0]+11;//optional val of Ace
                    
                }
                else if(cardN.length==1){//if card is 2-9 inclusive
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
            }
            return sum;
        },
    };
}