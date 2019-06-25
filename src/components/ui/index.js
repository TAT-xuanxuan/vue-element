const path = require('path');
const files = require.context('./', true, /\.js$/);

const components = [];

files.keys().forEach((item) => {
    let items = path.dirname(item).split(path.sep)
    let dir = items[1]
    // 排除下划线开头的组件
    if (dir && dir.indexOf('_') != 0) {
        let mod = files(item).default
        mod.name && components.push(mod)
    }
})
const install = Vue => {
    components.forEach(component => Vue.component('ui' + component.name, component))
}
export default install