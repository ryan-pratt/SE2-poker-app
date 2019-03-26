<template>
    <main-navigation />
</template>

<script>
import { StackNavigator } from 'vue-native-router';
import MenuScreen from './screens/MenuScreen.vue';
import BlackJackScreen from './screens/BlackJackScreen.vue';

const MainNavigation = StackNavigator(
    {
        Menu: MenuScreen,
        BlackJack: BlackJackScreen
    },
    {
        initialRouteName: 'Menu'
    }
)

export default {
    components: {
        MainNavigation
    }
}
</script>
