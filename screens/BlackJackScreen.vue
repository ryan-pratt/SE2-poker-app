<template>
    <keyboard-avoiding-view class='container' behavior="position">
        <view class="table">
            <view class="table-section dealer">
                <card v-for="(card, index) in dealer.Hand"
                    :key="card.id"
                    :value="card.val"
                    :face-up="index == 0 || dealerTurnStarted" />
            </view>
            <view class="table-section player">
                <card v-for="card in player.Hand"
                    :key="card.id"
                    :value="card.val" />
            </view>
            <view class="table-section controls">
                <text-input class="input" 
                    keyboard-type="numeric"
                    :on-submit-editing="placeBet" />
            </view>
        </view>
    </keyboard-avoiding-view>
</template>
    
<script>
import { KeyboardAvoidingView } from 'react-native';

import Card from '../components/Card';

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

            playerBet: null,
            dealerTurnStarted: false
        };
    },
    created: function() {
        this.deck = Deck();
        this.dealer = Dealer();
        this.player = Player(2000);
    },
    methods: {
        placeBet: function(event) {
            this.playerBet = parseInt(event.nativeEvent.text);
            if(this.playerBet > this.player.Money) {
                alert("You cannot bet more than you have.");
                this.playerBet = 0;
            }
            else {
                this.start();
            }
        },
        start: function() {
            this.dealer.startHand(this.deck);
            this.player.startHand(this.deck);
        }
    },
    components: {
        Card,
        KeyboardAvoidingView
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
    padding: 20;
    width: 100%;
}

.dealer {
    height: 40%;
}

.player {
    height: 40%;
}

.controls {
    height: 20%;
    padding-top: 0;
}

.input {
    background-color: white;
    padding: 10;
    height: 40;
    width: 60%;
}
</style>