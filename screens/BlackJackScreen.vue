<template>
    <view class='container'>
        <view class="table">
            <view class="table-section dealer">
                <view class="card card-up">
                    <text class="card-text">8 spades</text>
                </view>
                <view class="card card-down">
                    
                </view>
            </view>
            <view class="table-section player">
                <view class="card card-up">
                    <text class="card-text">7 spades</text>
                </view>
                <view class="card card-up">
                    <text class="card-text">6 spades</text>
                </view>
            </view>
            <view class="table-section controls">

            </view>
        </view>
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
        this.player = Player(2000);

        this.player.startHand(this.deck);
    },
    methods: {
        
    }
}
</script>

<style>
.container {
    background-color: #009900;
    width: 100%;
    height: 100%;
}

.table {
    display: flex;
    flex-direction: column;
}

.table-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20;
    padding: 20;
}

.card {
    width: 80;
    height: 120;
    margin: 10;
    padding: 20;
}

.card-up {
    background-color: white;
}

.card-down {
    background-color: #7777ff
}
</style>