module.exports = function(deckStack) {
    let newDealer = {
        DStack: [],
    };

    newDealer.DStack.push(deckStack.pop());
    newDealer.DStack.push(deckStack.pop());
    return newDealer;
}