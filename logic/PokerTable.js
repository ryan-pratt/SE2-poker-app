module.exports = function() {
    return{
        flush: [
            {id: 0, val: 'any'},
            {id: 0, val: 'any'},
            {id: 0, val: 'any'}
        ],
        fourth: {id: 0, val: 'any'},
        fifth: {id: 0, val: 'any'},
        pot = 0,

        resetFlush: function() {
            this.flush = [
                {id: 0, val: 'any'},
                {id: 0, val: 'any'},
                {id: 0, val: 'any'}
            ];
        },
        resetFourth: function() {
            this.fourth = {id: 0, val: 'any'};
        },
        resetFifth: function() {
            this.fifth = {id: 0, val: 'any'};
        },
        resetPot: function(){
            this.pot = 0;
        },
        raisePot: function(bet){
            this.pot += bet;
        },
        revealFlush : function(deckStack){
            for(let i = 0;i<3;i++){
                this.flush[i] = deckStack.pop();
                new Promise(resolve => setTimeout(resolve, 100))
                    .then(() => {return;});
            }
        },
        revealFourth : function(deckStack){
            this.fourth = deckStack.pop();
            new Promise(resolve => setTimeout(resolve, 100))
                .then(() => {return;});
        },
        revealFifth : function(deckStack){
            this.fifth = deckStack.pop();
            new Promise(resolve => setTimeout(resolve, 100))
                .then(() => {return;});
        },
    }
}