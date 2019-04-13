module.exports = function(deckStack) {
    return {
        Hand: [],

        startHand: function(deckStack){
            this.Hand = [];
            this.hit(deckStack);
            this.hit(deckStack);
        },
        calCardVals: function(){//dealer card vals
            var sum=[0,0];
            for(let i = 0; i < this.Hand.length; i++){//for the length of the hand
                var card = this.Hand[i];
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
            }
            return sum;
        },
        hit: function(deckStack) {
            this.Hand.push(deckStack.pop());
        },
        somethingElse: function(deckStack) {//dealer hit
            var ace = false;
            while(true){
                var sum = this.calCardVals();
                if(sum[1]!=0){
                    ace = true;
                }
                if(sum[0]==21||sum[1]==21){//if 21 -> stop
                    break;
                }
                else if(!ace&&(sum[0]>17)){//if no ace, and total >17 -> stop
                    break;
                }
                else if (ace&&(sum[1]==17)){//if hand with high ace, but total ==17 ->hit
                    this.Hand.push(deckStack.pop());
                }
                else if(ace&&(sum[0]<=17)){//if hand with low ace, but total <=17 ->hit
                    this.Hand.push(deckStack.pop());
                }
                else if(sum[0]<=16){//if hand with no ace, <=16 -> hit
                    this.Hand.push(deckStack.pop());
                }
                else if(ace&&(sum[1]>17)){//if hand with high ace, and total > 17 -> hit
                    this.Hand.push(deckStack.pop());
                }
                else{
                    console.log("uh oh!");
                }
            }
        }
    };
}