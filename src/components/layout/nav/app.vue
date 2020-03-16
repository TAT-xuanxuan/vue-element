<template>
    <div class="layout-nav">
        <div class="layout-nav-bar">
            <div class="content">
                <div v-for="(v,i) in list" @click="toRoute( v.path)" :key='i' class="nav-tab" :class="{active:path==v.path}"> {{ v.title }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import config from "#/config"
export default {
    name: "LayoutNav",

    computed: {
        title() {
            return config.title;
        }
    },
    created(){
        this.path = this.list[0].path;
    },
    methods: {
        //路由跳转
        toRoute(path) {
            this.path = path;
            this.$router.push({ path: path });
        }
    },
    data() {
        return {
            path: "",
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

}
</script>
<style lang='less'>
.layout-nav {
    @bgc-header: rgb(161, 181, 204);
    @height-header: 50px;
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

            .nav-tab {
                display: inline-block;
                width: 150px;
                height: @height-bar;
                line-height: @height-bar;
                cursor: pointer;
            }

            .active {
                background-color: @bgc-header;
            }

            .nav-tab:hover {
                background-color: @bgc-header;
            }

        }

    }

}
</style>