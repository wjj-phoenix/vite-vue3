<template>
  <!-- <p>{{ menu }}</p> -->
  <template v-for="menu in menus" :key="menu.path">
    <el-menu-item v-if="!menu.children && !menu.meta.hidden" @click="toMenu" :index="menu.path">
      <el-icon>
          <component :is="menu.meta.icon" />
        </el-icon>
      <template #title>
        <span>{{ menu.meta.title }}</span>
      </template>
    </el-menu-item>
    <el-menu-item v-if="menu.children && menu.children.length == 1 && !menu.meta.hidden" @click="toMenu" :index="menu.children[0].path">
      <el-icon>
        <component :is="menu.children[0].meta.icon" />
      </el-icon>
      <template #title>
        <span>{{ menu.children[0].meta.title }}</span>
      </template>
    </el-menu-item>
    <el-sub-menu v-if="menu.children && menu.children.length > 1" :index="menu.path">
      <template #title>
        <el-icon>
          <component :is="menu.meta.icon" />
        </el-icon>
        <span>{{ menu.meta.title }}</span>
      </template>
      <Item :menus="menu.children" />
    </el-sub-menu>
  </template>
</template>

<script lang="ts" setup>
import Item from './index.vue'
import { useRouter } from 'vue-router'

defineProps({
  menus: {
    type: Object,
    required: true
  }
})
const $router = useRouter()
const toMenu = (vc: any) => {
  $router.push(vc.index)
}

// console.log(menus)
</script>

<style scoped lang="scss">
.scrollbar {
  height: calc(100vh - 50px - 30px);

}
</style>