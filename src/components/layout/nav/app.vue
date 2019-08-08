<template>
    <div class="layout-nav">
        <div class="layout-nav-header">
            王学勇
        </div>
        <div class="layout-nav-bar">
            <el-tabs class="content" @tab-click="toRoute">
                <el-tab-pane v-for="(v,i) in list" :name="v.path" :label="v.title" :key='i' class="nav-tab"></el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    name: "LayoutNav",
    data() {
        return {
            list: [{
                    title: "首页",
                    path: "/home"
                },
                {
                    title: "我的简历",
                    path: "/resume"
                },
                {
                    title: "生活笔记",
                    path: "/notes"
                },
                {
                    title: "技术杂谈",
                    path: "/skill"
                },
                {
                    title: "网络日志",
                    path: "/blog"
                },
                {
                    title: "关于",
                    path: "/about"
                },
            ]
        }
    },
    methods: {
        //路由跳转
        toRoute(item) {
            this.$router.push({ path: item.name });
        }
    }

}
</script>
<style lang='less' scoped>
.layout-nav {
    @bgc-header: #BCE0DD;
    @height-header: 80px;

    @bgc-bar: #584D4D;
    @max-width-bar: 1200px;
    @height-bar: 50px;
    color: white;

    .layout-nav-header {
        background-color: @bgc-header;
        text-align: center;
        width: 100%;
        height: @height-header;
        line-height: @height-header;
    }

    .layout-nav-bar {
        background-color: @bgc-bar;
        height: @height-bar;
        text-align: center;

        .content {
            display: inline-block;
            width: @max-width-bar;
            height: @height-bar;
            line-height: @height-bar;

            .nav-tab:hover {
                background-color: @bgc-header;
            }

            ;
        }

    }

}
</style>