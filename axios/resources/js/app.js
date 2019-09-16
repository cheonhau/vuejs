require('./bootstrap');
window.Vue = require('vue');

Vue.component('user-dashboard', require('./components/UserDashboard.vue').default);
Vue.component('api-calling', require('./components/ApiCalling.vue').default);

const app = new Vue({
    el: '#app'
});