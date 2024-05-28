<template>
    <div class="container">
        <div class="slider" :class="{ 'fold': isCollapse }">
            <Slider />
        </div>
        <div class="tabbar" :class="{ 'fold': isCollapse }">
            <Tabbar />
        </div>
        <div class="main" :class="{ 'fold': isCollapse }">
            <Main />
        </div>
        <div class="footer" :class="{ 'fold': isCollapse }">
            底部栏
        </div>
    </div>
</template>
<script setup lang="ts">
import Slider from './slider/index.vue';
import Main from './main/index.vue';
import Tabbar from './tabbar/index.vue';
import emitter from '@/utils/emitter';
import { ref } from 'vue';

let isCollapse = ref(false)
// 绑定事件
emitter.on('is-collapse', (collapse: any) => {
    isCollapse.value = collapse
})
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
        transition: all 0.3s;

        &.fold {
            width: 50px;
        }
    }

    .tabbar {
        position: fixed;
        width: calc(100% - 200px);
        height: 50px;
        top: 0px;
        left: 200px;
        background-color: aqua;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.3s;

        &.fold {
            width: calc(100% - 50px);
            left: 50px;
        }
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
        transition: all 0.3s;

        &.fold {
            width: calc(100% - 50px);
            left: 50px;
        }
    }

    .footer {
        position: absolute;
        width: calc(100% - 200px);
        height: 25px;
        bottom: 0px;
        left: 200px;
        background-color: yellow;
        text-align: center;
        transition: all 0.3s;

        &.fold {
            width: calc(100% - 50px);
            left: 50px;
        }
    }
}
</style>