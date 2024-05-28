<template>
    <div class="container">
        <div class="slider">
            <Slider />
        </div>
        <div class="tabbar">
            头部栏
        </div>
        <div class="main">
            <RouterView />
        </div>
        <div class="footer">
            底部栏
        </div>
    </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router';
import Slider from './slider/index.vue';
</script>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 100vh;
    background-color: red;
    .slider {
        color: white;
        width: 200px;
        height: 100vh;
        background: blue;
    }

    .tabbar {
        position: fixed;
        width: calc(100% - 200px);
        height: 50px;
        top: 0px;
        left: 200px;
        background-color: aqua;
    }

    .main {
        position: absolute;
        width: calc(100% - 200px);
        height: calc(100vh - 50px);
        left: 200px;
        top: 50px;
        padding: 20px;
        box-sizing: border-box;
        background-color: rgb(4, 195, 8);
        overflow: auto;
    }
    .footer{
        position: absolute;
        width: calc(100% - 200px);
        height: 25px;
        bottom: 0px;
        left: 200px;
        background-color: yellow;
        text-align: center;
    }
}
</style>