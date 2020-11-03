import Vue from 'vue';
import Toasted from 'vue-toasted';
import vClickOutside from 'v-click-outside';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import VSvg from './components/base/VSvg.vue';
import VContainer from './components/base/VContainer.vue';

Vue.config.productionTip = false;

Vue.use(vClickOutside);
Vue.use(Vuelidate);
Vue.use(Toasted, {
  position: 'bottom-center',
  duration: 3000,
});

Vue.component('VSvg', VSvg);
Vue.component('VContainer', VContainer);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
