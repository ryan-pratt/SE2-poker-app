<template>
    <view class='container'>
        <text>This is the menu screen.</text>

        <touchable-opacity :on-press="startBlackJack">
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
</style>