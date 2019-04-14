module.exports = function(deckStack) {
    return {
        Hand: [],

        resetHand: function() {
            this.Hand = [];
        },
        startHand: function(deckStack){
            this.resetHand();
            this.hit(deckStack);
            this.hit(deckStack);
        },
        calCardVals: function(){//dealer card vals
            var sum=[0,0];
            console.log('dealer');
            console.log(this.Hand);
            this.Hand.forEach(thisCard => {
                var card = thisCard.val;
                var cardN = card.slice(0,card.length-1);
                if(cardN == '1'){//if card is Ace 
                    sum[1]= sum[0] + 11;//optional val of Ace
                    sum[0]+= 1;
                }
                else if(cardN.length==1){//if card is 2-9 inclusive
                    sum[0]+= parseInt(cardN);
                    if(sum[1]!=0){//if Ace is present
                        sum[1]+= parseInt(cardN);
                    }
                }
                else{//if card is face, via elim
                    sum[0]+= 10;
                    if(sum[1]!=0){//if Ace is present
                        sum[1]+= 10;
                    }
                }
            });
            return sum;
        },
        hit: function(deckStack) {
            this.Hand.push(deckStack.pop());
            new Promise(resolve => setTimeout(resolve, 100))
                .then(() => {return;});
        },
        isBust: function() {
            let sum = this.calCardVals();
            return sum[0] > 21;
        },
        DealerHitLogic: function(deckStack) {//dealer hit
            var cont = true;
            while(cont){
                var sum = this.calCardVals();
                if(sum[1]>0){//if we even have an ace
                    if(sum[1]<=16){//if the largest possible val is <=16
                        this.hit(deckStack);
                    }
                    else if(sum[1]==17){//if the largest possible val ==17
                        this.hit(deckStack);
                    }
                    else if(sum[1]>21){//if largest is bust
                        if(sum[0]<16){//but smallest is <16
                            this.hit(deckStack);
                        }
                        else if(sum[0]==17){//but smallest is ==17
                            this.hit(deckStack);
                        }
                        else{
                            cont = false;//stand
                        }
                    }
                    else{
                        cont = false;//stand
                    }
                }
                else{//if no ace present
                    if(sum[0]<=16){
                        this.hit(deckStack);
                    }
                    else{
                        cont = false;//stand
                    }
                }
            }
        }
    };
}