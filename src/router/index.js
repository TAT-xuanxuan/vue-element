import VueRouter from "vue-router"
const path = require("path");
const files = require.context("./", false, /\.js$/);
const routes = [];
console.log(files)
files.keys().forEach(file => {
    let name = path.basename(file, ".js");
    let route = files[item].default;
    if (Array.isArray(route)) {
        routes.push(...route);
    } else {
        routes.push(route);
    }
});

// 路由实例化
const Router = new VueRouter({

    routes
})
export default Router