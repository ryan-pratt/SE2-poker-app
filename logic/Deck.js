module.exports = function() {
    let newDeck = [
        {id: 1, val: '1s'},
        {id: 2, val: '2s'},
        {id: 3, val: '3s'},
        {id: 4, val: '4s'},
        {id: 5, val: '5s'},
        {id: 6, val: '6s'},
        {id: 7, val: '7s'},
        {id: 8, val: '8s'},
        {id: 9, val: '9s'},
        {id: 10, val: '10s'},
        {id: 11, val: '11s'},
        {id: 12, val: '12s'},
        {id: 13, val: '13s'},
        {id: 14, val: '1c'},
        {id: 15, val: '2c'},
        {id: 16, val: '3c'},
        {id: 17, val: '4c'},
        {id: 18, val: '5c'},
        {id: 19, val: '6c'},
        {id: 20, val: '7c'},
        {id: 21, val: '8c'},
        {id: 22, val: '9c'},
        {id: 23, val: '10c'},
        {id: 24, val: '11c'},
        {id: 25, val: '12c'},
        {id: 26, val: '13c'},
        {id: 27, val: '1d'},
        {id: 28, val: '2d'},
        {id: 29, val: '3d'},
        {id: 30, val: '4d'},
        {id: 31, val: '5d'},
        {id: 32, val: '6d'},
        {id: 33, val: '7d'},
        {id: 34, val: '8d'},
        {id: 35, val: '9d'},
        {id: 36, val: '10d'},
        {id: 37, val: '11d'},
        {id: 38, val: '12d'},
        {id: 39, val: '13d'},
        {id: 40, val: '1h'},
        {id: 41, val: '2h'},
        {id: 42, val: '3h'},
        {id: 43, val: '4h'},
        {id: 44, val: '5h'},
        {id: 45, val: '6h'},
        {id: 46, val: '7h'},
        {id: 47, val: '8h'},
        {id: 48, val: '9h'},
        {id: 49, val: '10h'},
        {id: 50, val: '11h'},
        {id: 51, val: '12h'},
        {id: 52, val: '13h'}
    ];
    //this for loop shuffles the deck
    for (let i = 0; i < 3000; i++) {
        var num1 = Math.ceil(52*Math.random());
        var num2 = Math.ceil(52*Math.random());
        var temp = newDeck[num1];
        newDeck[num1] = newDeck[num2];
        newDeck[num2] = temp;
    }

    return newDeck;
}