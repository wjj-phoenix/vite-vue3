<template>
    <div class="slider-header">
        <img src="@/assets/logo.svg" alt="logo">
        <p>phoenix ops</p>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.slider-header {
    width: 100%;
    height: 50px;
    display: flex; // 浮动
    align-items: center; // 垂直居中
    justify-content: center; // 水平居中
    background-color: #000;
    img {
        height: 40px;
        width: 40px;
    }
    p {
        font-size: 20px;
        margin-left: 10px;
    }
}
</style>