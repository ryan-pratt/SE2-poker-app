<template>
    <view class='container'>
        <view class='banner'>
            <text class='hero-text'>Poker Game</text>
        </view>

        <touchable-opacity class='button' :on-press="startBlackJack">
            <text>Tap here to go to the blackjack game</text>
        </touchable-opacity>
    </view>
</template>
    
<script>
export default {
    props: {
        navigation: {
            type: Object
        }
    },
    data: function() {
        return {

        };
    },
    methods: {
        startBlackJack: function() {
            this.navigation.navigate('BlackJack');
        }
    }
}
</script>

<style>
.container {
    background-color: white;
}

.banner {
    width: 100%;
    background-color: aqua;
    border-radius: 20;
    height: 150;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-text {
    font-size: 20;
}

.button {
    margin: 40;
    background-color: #55dd55;
    border-radius: 40;
    height: 80;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>