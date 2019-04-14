<template>
    <view :class="{
            'card': true,
            'card-up': faceUp,
            'card-down': !faceUp
        }">
        <image class="image" v-if="faceUp" :source="image" :resizeMode="resizeMode" />
    </view>
</template>
    
<script>
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode';

const ImageLibrary = require('../logic/ImageLibrary');

export default {
    props: {
        value: {
            type: String
        },
        faceUp: {
            type: Boolean,
            default: true
        }
    },
    data: function() {
        return {
            resizeMode: ImageResizeMode.contain
        };
    },
    computed: {
        image: function() {
            return ImageLibrary[this.value].uri;
        }
    }
}
</script>

<style>
.card {
    width: 80;
    height: 116;
    margin: 10;
    padding: 0;
    border-radius: 3;
}

.card-down {
    background-color: #7777ff
}

.image {
    width: 80;
    height: 116;
    margin: 0;
    padding: 0;
}
</style>