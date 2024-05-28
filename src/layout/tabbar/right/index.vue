<template>
    <el-button icon="Refresh" circle />
    <el-button icon="FullScreen" circle />
    <el-button icon="Setting" circle />

    <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link" style="display: flex; align-items: center;">
            <img src="@/assets/logo.svg" alt="logo" style="width: 40px; height: 30px;" />
            admin
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item command="c">关于</el-dropdown-item>
                <el-dropdown-item command="b">
                    <el-icon><User /></el-icon>个人信息
                </el-dropdown-item>
                <el-dropdown-item command="a" style="color: red;">
                        <el-icon>
                        <Close />
                    </el-icon>退出登录
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
const handleCommand = (command: string) => {
    console.log(command, '!!!');
}
</script>

<style scoped lang="sass"></style>