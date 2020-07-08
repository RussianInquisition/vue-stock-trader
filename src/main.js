import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./quasar";
import firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyCtENZhu4aeLq-WENSIvi81lxd1jtA879w",
  authDomain: "vue-stock-trader-ffe5f.firebaseapp.com",
  databaseURL: "https://vue-stock-trader-ffe5f.firebaseio.com",
  projectId: "vue-stock-trader-ffe5f",
  storageBucket: "vue-stock-trader-ffe5f.appspot.com",
  messagingSenderId: "600790893884",
  appId: "1:600790893884:web:2fe8c90771e707deaa8a39"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  // eslint-disable-next-line prettier/prettier
  render: (h) => h(App)
}).$mount("#app");
