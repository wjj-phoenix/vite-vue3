<template>
  <el-scrollbar class="scrollbar">
    <el-menu style="--el-menu-bg-color: #001529; --el-menu-text-color: white" mode="vertical" :default-active="route" :collapse="isCollapse" show-timeout="0" hide-timeout="0">
      <Item :menus="menus" />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import Item from './item/index.vue'
import { useMenuStore } from '@/stores/models/menu'
import { useRoute } from 'vue-router'
import emitter from '@/utils/emitter'
import { ref } from 'vue'

let isCollapse = ref(false)

// 绑定事件
emitter.on('is-collapse', (collapse: any) => {
  isCollapse.value = collapse
})

const { menus } = useMenuStore()


const route =useRoute().path

</script>

<style scoped lang="scss">
.scrollbar{
  width: 100%;
  height: calc(100vh - 50px);

  el-menu {
    border: none;
  }
}
</style>