import Vue from 'vue';
import Vuelidate from 'vuelidate';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import VSvg from './components/VSvg.vue';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(Vuelidate);

Vue.component('VSvg', VSvg);

firebase.initializeApp({
  apiKey: 'AIzaSyBFcmq-lr7xQX-oeo6iaFfS-hohh0xPIoI',
  authDomain: 'vue-shop-540f7.firebaseapp.com',
  databaseURL: 'https://vue-shop-540f7.firebaseio.com',
  projectId: 'vue-shop-540f7',
  storageBucket: 'vue-shop-540f7.appspot.com',
  messagingSenderId: '475248356411',
  appId: '1:475248356411:web:aa3db0561b7bb6c8b3401e',
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
