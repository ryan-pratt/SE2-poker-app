<template>
    <view class='container'>
        <text>This is the blackjack gameplay screen.</text>
    </view>
</template>
    
<script>
const BlackJack = require('../logic/BlackJack');
const Deck = require('../logic/Deck');
const Dealer = require('../logic/Dealer');
const Player = require('../logic/Player');

export default {
    props: {
        navigation: {
            type: Object
        }
    },
    data: function() {
        return {
            deck: null,
            dealer: null,
            player: null
        };
    },
    created: function() {
        this.deck = Deck();
        this.dealer = Dealer();
        this.player = Player();
    },
    methods: {
        
    }
}
</script>

<style>
.container {
    background-color: white;
}
</style>