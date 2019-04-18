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
                        ref="betInput"
                        keyboard-type="numeric"
                        placeholder="Input bet amount"
                        :editable="state === 0"
                        :on-end-editing="placeBet" />
                    <touchable-opacity v-if="state === 0" class="bet-button" :on-press="dismissKeyboard">
                        <text>Bet</text>
                    </touchable-opacity>
                </view>

                <view v-if="state == 1" class="column">
                    <view class="row">
                        <touchable-opacity class="action-button" :on-press="playerHit">
                            <text class="action-button-text">Hit</text>
                        </touchable-opacity>
                        <touchable-opacity v-if="player.Money >= playerBet" class="action-button" :on-press="playerDouble">
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
                    this.$refs.betInput.clear();
                    this.playerBet = 0;
                    this.player.resetHand();
                    this.dealer.resetHand();
            }
        }
    },
    created: function() {
        this.dealer = Dealer();
        this.player = Player(2000);
    },
    methods: {
        placeBet: function(event) {
            this.dismissKeyboard();
            if(!/^\d+$/.test(event.nativeEvent.text)) {
                alert("Please enter a valid number.");
                return;
            }

            let input = parseInt(event.nativeEvent.text);
            if(input === null
                    || input === undefined
                    || input === NaN
                    || input <= 0) {
                alert("You must bet a positive number.");
                this.playerBet = 0;
            }
            else {
                this.playerBet = input;
                if(this.playerBet > this.player.Money) {
                    alert("You cannot bet more than you have.");
                    this.playerBet = this.player.Money;
                }
                else {
                    this.player.bet(this.playerBet);
                    this.startRound();
                    this.nextState();
                }
            }
        },
        startRound: function() {
            this.deck = Deck();
            this.dealer.startHand(this.deck);
            this.player.startHand(this.deck);
        },

        playerTurn: function() {
            if(this.player.isBust()){
                alert('You busted!');
                this.state = 0;
            }
            else if(this.player.is21()){
                this.nextState();
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
            this.dealer.DealerHitLogic(this.deck);
            this.finishRound();
        },
        finishRound: function() {
            this.sleep(1500).then(() => {
                if(this.dealer.isBust()){
                    this.playerWins();
                }
                else {
                    let playerVals = this.player.calCardVals();
                    let playerTotal = playerVals[1] > 21 ? playerVals[0] : playerVals[1];
        
                    let dealerVals = this.dealer.calCardVals();
                    let dealerTotal = dealerVals[1] > 21 ? dealerVals[0] : dealerVals[1];
        
                    if(playerTotal == 0) alert('error calculating player totals');
                    if(dealerTotal == 0) alert('error calculating dealer totals');
    
                    if(playerTotal > dealerTotal){
                        this.playerWins();
                    }
                    else if(playerTotal == dealerTotal){
                        this.tie();
                    }
                    else {
                        this.dealerWins();
                    }
                }
                this.nextState();
            });
        },
        playerWins: function() {
            this.player.Money += 2 * this.playerBet;
            alert('You won');
        },
        tie: function() {
            this.player.Money += this.playerBet;
            alert('Tie');
        },
        dealerWins: function(){
            alert('The dealer won');
        },

        nextState: function() {
            this.state = (this.state + 1) % 3;
        },
        dismissKeyboard: function() {
            Keyboard.dismiss();
        },
        sleep: async function(ms) {
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