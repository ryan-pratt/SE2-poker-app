module.exports = function(deckStack) {
    let newDealer = {
        DStack: [],

        is21: function() {
            //TODO
        },
        hit: function() {
            //TODO
        }
    };

    newDealer.Pstack.push(deckStack.pop());
    newDealer.Pstack.push(deckStack.pop());
    return newDealer;
}