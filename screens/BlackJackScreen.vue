<template>
    <view class='container'>
        <view class="table">
            <view class="table-section dealer">
                <card v-for="(card, index) in dealer.Hand"
                    :key="card[0]"
                    :value="card[1]"
                    :face-up="index == 0 || dealerTurnStarted" />
            </view>
            <view class="table-section player">
                <card v-for="card in player.Hand"
                    :key="card[0]"
                    :value="card[1]" />
            </view>
            <view class="table-section controls">

            </view>
        </view>
    </view>
</template>
    
<script>
import Card from '../components/Card';

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
            player: null,

            dealerTurnStarted: false
        };
    },
    created: function() {
        this.deck = Deck();
        this.dealer = Dealer();
        this.player = Player(2000);

        this.dealer.startHand(this.deck);
        this.player.startHand(this.deck);
    },
    methods: {
        
    },
    components: {
        Card
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