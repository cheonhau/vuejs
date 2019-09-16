require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router';
import { routes }  from './index';

// Vue.component('user-dashboard', require('./components/UserDashboard.vue').default);

Vue.use(VueRouter);

const router = new VueRouter ({
    mode : 'history',
    routes
})

const app = new Vue({
    el: '#app',
    router
});