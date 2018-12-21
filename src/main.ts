import Vue from "vue";
import "./plugins/vuetify";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import * as firebase from "firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "dummy",
      authDomain: "techza-d0276.firebaseapp.com",
      databaseURL: "https://techza-d0276.firebaseio.com",
      projectId: "techza-d0276",
      storageBucket: "techza-d0276.appspot.com",
      messagingSenderId: "171668360923"
    });
  }
}).$mount("#app");
