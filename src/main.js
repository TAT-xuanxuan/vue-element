import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import UI from './components/ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(UI);
Vue.use(ElementUI);
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')