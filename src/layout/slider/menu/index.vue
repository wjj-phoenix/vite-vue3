<template>
  <el-scrollbar class="scrollbar">
    <el-menu style="--el-menu-bg-color: #001529; --el-menu-text-color: white" mode="vertical">
      <Item :menus="menus" />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import Item from './item/index.vue'
import { useMenuStore } from '@/stores/models/menu'

const { menus } = useMenuStore()

</script>

<style scoped lang="scss">
.scrollbar{
  width: 100%;
    height: calc(100vh - 50px - 30px);
  .el-menu{
    border: none;
  }
}
</style>