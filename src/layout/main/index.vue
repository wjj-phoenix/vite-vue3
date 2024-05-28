<template>
  <!-- 使用动态过渡名称 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass"></style>