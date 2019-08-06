<template>
    <div class="layout-nav">
        <div class="layout-nav-header">
            王学勇
        </div>
        <div class="layout-nav-bar"></div>
        <div class="app-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: "LayoutNav"

}
</script>
<style lang='less' scoped>
.layout-nav {
    .layout-nav-header {
        height: 80px;
        background-color: #BCE0DD;
        text-align: center;
        line-height: 80px;
    }

    .layout-nav-bar {}

}
</style>