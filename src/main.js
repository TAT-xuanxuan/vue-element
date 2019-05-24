import Vue from "vue";
import App from "./App.vue";

console.log(App)
console.log("#app")

new Vue({
  render: h => h(App),
}).$mount('#app')
