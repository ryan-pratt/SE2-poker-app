<template>
    <keyboard-avoiding-view class='container' behavior="position">
        <view class="table">
            <view class="table-section dealer">
                <card v-for="(card, index) in dealer.Hand"
                    :key="card.id"
                    :value="card.val"
                    :face-up="index == 0 || state == 2" />
            </view>
            <view class="table-section player">
                <card v-for="card in player.Hand"
                    :key="card.id"
                    :value="card.val" />
            </view>
            <view class="table-section controls">
                <text>Current funds: {{player.Money}}</text>
                <view class="row">
                    <text-input class="input"
                        keyboard-type="numeric"
                        placeholder="Input bet amount"
                        :editable="state == 0"
                        :on-end-editing="placeBet" />
                    <touchable-opacity v-if="state == 0" class="bet-button" :on-press="dismissKeyboard">
                        <text>Bet</text>
                    </touchable-opacity>
                </view>

                <view v-if="state == 1" class="column">
                    <view class="row">
                        <touchable-opacity class="action-button" :on-press="playerHit">
                            <text class="action-button-text">Hit</text>
                        </touchable-opacity>
                        <touchable-opacity class="action-button" :on-press="playerDouble">
                            <text class="action-button-text">Double</text>
                        </touchable-opacity>
                    </view>
                    <view class="row">
                        <touchable-opacity class="action-button" :on-press="playerStand">
                            <text class="action-button-text">Stand</text>
                        </touchable-opacity>
                    </view>
                </view>
            </view>
        </view>
    </keyboard-avoiding-view>
</template>
    
<script>
import { Keyboard, KeyboardAvoidingView } from 'react-native';

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
            state: 0, // 0 - bet, 1 - player's turn, 2 - dealer's turn
        };
    },
    watch: {
        state: function (val) {
            switch(val){
                case 1:
                    this.playerTurn();
                    break;
                case 2:
                    this.startDealerTurn();
                    break;
                default:
                    this.startNextHand();
            }
        }
    },
    created: function() {
        this.deck = Deck();
        this.dealer = Dealer();
        this.player = Player(2000);
    },
    methods: {
        placeBet: function(event) {
            this.dismissKeyboard();
            this.playerBet = parseInt(event.nativeEvent.text);
            if(this.playerBet === null
                    || this.playerBet === undefined
                    || this.playerBet === NaN
                    || this.playerBet <= 0) {
                alert("You must bet a positive amount.");
                this.playerBet = 0;
            }
            else if(this.playerBet > this.player.Money) {
                alert("You cannot bet more than you have.");
                this.playerBet = this.player.Money;
            }
            else {
                this.player.bet(this.playerBet);
                this.startRound();
            }
        },
        startRound: async function() {
            this.dealer.startHand(this.deck);
            await this.sleep(100);
            this.player.startHand(this.deck);
            await this.sleep(100); //sometimes cards are rendering before the hands are loaded
            this.nextState();
        },

        playerTurn: function() {
            if(this.player.isBust()){
                //TODO
            }
            else if(this.player.is21()){
                //TODO
            }
        },
        playerHit: function() {
            this.player.hit(this.deck);
            this.playerTurn();
        },
        playerDouble: function() {
            this.player.doubleDown(this.playerBet, this.deck);
            this.nextState();
        },
        playerStand: function() {
            this.nextState();
        },

        startDealerTurn: function() {
            console.log('yay');
        },

        startNextHand: function() {
            this.playerBet = 0;
        },

        nextState: function() {
            this.state = (this.state + 1) % 3;
        },
        dismissKeyboard: function() {
            Keyboard.dismiss();
        },
        sleep: function(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
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
    padding: 10;
    width: 100%;
}

.dealer {
    height: 35%;
}

.player {
    height: 35%;
}

.controls {
    height: 30%;
    padding-top: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.column {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.input {
    background-color: white;
    padding: 10;
    height: 40;
    width: 60%;
    border-radius: 6;
}

.bet-button {
    margin: 10;
    padding: 10;
    height: 40;
    background-color: aqua;
    border-radius: 6;
    display: flex;
    justify-content: center;
    align-items: center;
}

.action-button {
    margin: 10;
    margin-bottom: 0;
    padding: 10;
    height: 50;
    width: 25%;
    background-color: darkslategrey;
    border-radius: 6;
    display: flex;
    justify-content: center;
    align-items: center;
}

.action-button-text {
    color: white;
}
</style>