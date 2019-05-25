import VueRouter from "vue-router"
import Vue from 'vue'

Vue.use(VueRouter)

const path = require("path");
const files = require.context("./modules/", false, /\.js$/);
const routes = [];

files.keys().forEach((item) => {
    let name = path.basename(item, '.js')
    if (name === 'index') return;
    let route = files(item).default
    if (Array.isArray(route)) {
        routes.push(...route)
    } else {
        routes.push(route)
    }
})
// 路由实例化
const router = new VueRouter({
    routes
})
export default router