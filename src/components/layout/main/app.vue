<template>
  <el-container class="app--layout">
    <el-header class="app--layout-header">
      <layout-nav></layout-nav>
    </el-header>
    <el-main class="app--layout-main">
      <router-view></router-view>
    </el-main>
    <el-footer class="app--layout-footer">
      <a href="http://www.beian.miit.gov.cn" target="_blank">黔ICP备19005240号</a>
    </el-footer>
  </el-container>
</template>
<script>
import LayoutNav from "./../nav";
export default {
  name: "LayoutMain",
  components: { LayoutNav }
};
</script>
<style lang="less" scoped>
.app--layout {
  @bgc-bar: rgb(240, 244, 246);
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  .app--layout-header {
    margin: 0;
    padding: 0;
    height: 130px;
  }
  .app--layout-main {
    margin: 0;
    padding: 0;
  }
  .app--layout-footer {
    background-color: @bgc-bar;
    margin: 0;
    padding: 0;
    text-align: center;
    height: 20px!important;
  }
}
</style>