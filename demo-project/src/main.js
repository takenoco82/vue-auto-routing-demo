import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

Vue.config.errorHandler = (err, vm, info) => {
  console.log(`Captured in Vue.config.errorHandler: ${info}`, err);
};
window.addEventListener("error", event => {
  console.log(event.message);
});
// window.onerror = function (msg, url, line, col, error) {
//   console.log(msg, error.message); // エラーの内容
// };
