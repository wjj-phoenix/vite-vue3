<template>
    <el-icon size="30px" @click="checkCollapse">
        <Expand v-show="!isCollapse" />
        <Fold v-show="isCollapse" />
    </el-icon>

    <el-breadcrumb style="margin-left: 10px;" separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="(item, index) in route.matched" :key="index" v-show="item.meta.title" :to="item.path">
            <el-icon style="margin-right: 10px">
                <component :is="item.meta.icon" />
            </el-icon>
            <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import emitter from '@/utils/emitter';

const route = useRoute();
console.log(route.matched, '!!');

const isCollapse = ref(false);

// 触发事件，执行点击时收起菜单
const checkCollapse = () => {
    isCollapse.value = !isCollapse.value;
    emitter.emit('is-collapse', isCollapse.value)
}
</script>

<style scoped lang="sass"></style>