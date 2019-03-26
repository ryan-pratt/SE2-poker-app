<template>
    <main-navigation />
</template>

<script>
import { StackNavigator } from "vue-native-router";
import MenuScreen from "./screens/MenuScreen.vue";

const MainNavigation = StackNavigator(
    {
        Menu: MenuScreen
    },
    {
        initialRouteName: "Menu"
    }
)

export default {
    components: {
        MainNavigation
    }
}
</script>
