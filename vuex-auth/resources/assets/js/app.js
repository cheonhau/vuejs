require('./bootstrap');
import Vue from 'vue';

import VueRouter from 'vue-router';

import Vuex from 'vuex';

import loadding from './loading';
import {routes} from './routes';

import MainApp from './components/MainApp.vue';
import CustomerData from './customer/module';
import {initialize} from './helpers/general';
import StoreData from './user/module';

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.component('pagination', require('./components/Pagination.vue'));

// const store = new Vuex.Store(StoreData);
const store = new Vuex.Store({
    modules : {
        loadding, StoreData, CustomerData
    }
});

const router = new VueRouter({
    routes,
    mode: 'history'
});

initialize(store, router);

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        MainApp
    }
});
