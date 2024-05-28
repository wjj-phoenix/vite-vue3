<template>
    <div class="tabbar-left">
        <Left />
    </div>
    <div class="tabbar-right">
        <Right />
    </div>
</template>
<script setup lang="ts">
import Left from './left/index.vue';
import Right from './right/index.vue';
</script>

<style scoped lang="scss">
.tabbar-left {
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 10px;
}

.tabbar-right {
    display: flex;
    margin-right: 10px;
    align-items: center;
}
</style>