<template>
    <view :class="{
            'card': true,
            'card-up': faceUp,
            'card-down': !faceUp
        }">
        <text v-if="faceUp" class="card-text">{{value}}</text>
    </view>
</template>
    
<script>
export default {
    props: {
        value: {
            type: String
        },
        faceUp: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style>
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