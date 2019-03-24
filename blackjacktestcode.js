DeckArray = [[1, '1s'],
  [2, '2s'],
  [3, '3s'],
  [4, '4s'],
  [5, '5s'],
  [6, '6s'],
  [7, '7s'],
  [8, '8s'],
  [9, '9s'],
  [10, '10s'],
  [11, '11s'],
  [12, '12s'],
  [13, '13s'],
  [14, '1c'],
  [15, '2c'],
  [16, '3c'],
  [17, '4c'],
  [18, '5c'],
  [19, '6c'],
  [20, '7c'],
  [21, '8c'],
  [22, '9c'],
  [23, '10c'],
  [24, '11c'],
  [25, '12c'],
  [26, '13c'],
  [27, '1d'],
  [28, '2d'],
  [29, '3d'],
  [30, '4d'],
  [31, '5d'],
  [32, '6d'],
  [33, '7d'],
  [34, '8d'],
  [35, '9d'],
  [36, '10d'],
  [37, '11d'],
  [38, '12d'],
  [39, '13d'],
  [40, '1h'],
  [41, '2h'],
  [42, '3h'],
  [43, '4h'],
  [44, '5h'],
  [45, '6h'],
  [46, '7h'],
  [47, '8h'],
  [48, '9h'],
  [49, '10h'],
  [50, '11h'],
  [51, '12h'],
  [52, '13h']];

var Deck = {};
DeckArray.forEach(function(data) {
  Deck[data[0]] = data[1]
});
var DeckStack = [];
console.log(Deck);



class BlackJack {



  static shuffle() {
    var i;
    for (i = 0; i < 3000; i++) {
      var num1 = Math.ceil(52*Math.random())
      var num2 = Math.ceil(52*Math.random())
      var temp = Deck[num1]
      Deck[num1] = Deck[num2]
      Deck[num2] = temp
    }
    for (i = 1; i <= 52; i++) {
      DeckStack.push(Deck[i])
    }
  }


  static init() {
    var PlayerMoney = 10000;
    Player.constructor(PlayerMoney);
    Dealer.constructor();
    var stake = prompt('Enter your bet: ')
    Player.PMoney -= stake
  }

  hit() {}

}

class Player extends BlackJack {
  constructor(PlayerMoney) {
    this.PStack = [];
    this.PMoney = PlayerMoney;
    this.init()
  }
  init() {
    this.Pstack.push(DeckStack.pop())
    this.Pstack.push(DeckStack.pop())
  }
  is21() {}
}
class Dealer extends BlackJack {
  constructor() {
    this.DStack = [];
    this.init()
  }
  init() {
    this.Dstack.push(DeckStack.pop())
    this.Dstack.push(DeckStack.pop())
  }
}


BlackJack.shuffle()
console.log(DeckStack)
BlackJack.init()
console.log(Player.PStack)
console.log(Player.PMoney)
console.log(Dealer.DStack)