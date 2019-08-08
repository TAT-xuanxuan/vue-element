<template>
    <el-container class="app--layout">
        <el-header class="app--layout-header" style="height: 130px">
            <layout-nav></layout-nav>
        </el-header>
        <el-main class="app--layout-main">
            <router-view></router-view>
        </el-main>
        <el-footer class="app--layout-footer">Footer</el-footer>
    </el-container>
</template>
<script>
import LayoutNav from "./../nav"
export default {
    name: 'LayoutMain',
    components: { LayoutNav }
}
</script>
<style lang="less" scoped>
.app--layout{
    @bgc-bar: #584D4D;
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	.app--layout-header{
		margin: 0;
		padding: 0;
		height: 130px;
	}
	.app--layout-main{
		margin: 0;
		padding: 0;
	}
	.app--layout-footer{
		background-color: @bgc-bar;
		margin: 0;
		padding: 0;
	}
}
</style>