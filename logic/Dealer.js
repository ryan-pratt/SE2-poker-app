module.exports = function(deckStack) {
    return {
        Hand: [],

        startHand: function(deckStack){
            this.Hand = [];
            this.hit(deckStack);
            this.hit(deckStack);
        },
        calCardVals: function(dealer){//dealer card vals
            var sum=[0,0];
            for(let i = 0; i < dealer.DStack.length; i++){//for the length of the hand
                var card = dealer.DStack[i];
                var cardN = card.slice(0,card.length-1);
                if(cardN.equals('1')){//if card is Ace
                    sum[1]+= sum[0] + 11;//optional val of Ace
                    sum[0]+= 1;
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
        hit: function(dealer, deckStack) {//dealer hit
            var cont = true;
            var ace = false;
            while(cont){
                var sum = calDCardVals(dealer);
                if(sum[1]!=0){
                    ace = true;
                }
                if(sum[0]==21||sum[1]==21){//if 21 -> stop
                    cont = false;
                }
                else if(!ace&&(sum[0]>17)){//if no ace, and total >17 -> stop
                    cont = false;
                }
                else if (ace&&(sum[1]==17)){//if hand with high ace, but total ==17 ->hit
                    dealer.Dstack.push(deckStack.pop());
                }
                else if(ace&&(sum[0]<=17)){//if hand with low ace, but total <=17 ->hit
                    dealer.Dstack.push(deckStack.pop());
                }
                else if(sum[0]<=16){//if hand with no ace, <=16 -> hit
                    dealer.Dstack.push(deckStack.pop());
                }
                else if(ace&&(sum[1]>17)){//if hand with high ace, and total > 17 -> hit
                    dealer.Dstack.push(deckStack.pop());
                }
                else{
                    console.log("uh oh!");
                }
            }
        }
    };
}