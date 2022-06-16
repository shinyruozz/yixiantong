// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store/index";


import "./assets/js/fastclick";
import "./assets/js/common";

import "./assets/styles/index.scss";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    router,
    store,
    components: { App },
    render: (h) => h(App),
}).$mount("#app");