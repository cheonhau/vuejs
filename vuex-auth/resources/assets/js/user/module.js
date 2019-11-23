import { getLocalUser } from "./api";
import { getCustomerList, addCustomer } from '../customer/api'; // customer

const user = getLocalUser();

const CUSTOMER_FETCH = 'customer_fetch'; // customer
const CUSTOMER_ADD = 'customer_add'; // customer
const CUSTOMER_TOGGLE_STATUS = 'customer_toggle_status'; // customer

const state =  {
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        customers: []
    }
const getters = {
        isLoading(state) {
            return state.loading;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        currentUser(state) {
            return state.currentUser;
        },
        authError(state) {
            return state.auth_error;
        },
        customers(state) {
            return state.customers;
        }
    }
const mutations = {
        login(state) {
            state.loading = true;
            state.auth_error = null;
        },
        loginSuccess(state, payload) {
            state.auth_error = null;
            state.isLoggedIn = true;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});

            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        loginFailed(state, payload) {
            state.loading = false;
            state.auth_error = payload.error;
        },
        logout(state) {
            localStorage.removeItem("user");
            state.isLoggedIn = false;
            state.currentUser = null;
        },
        updateCustomers(state, payload) {
            state.customers = payload;
        },
        // customer
        [CUSTOMER_FETCH](state, customers) {
            return state.customers = customers
        },
    
        [CUSTOMER_ADD](state, customer) {
            return state.customers = [customer, ...state.customers]
        },
    
        [CUSTOMER_TOGGLE_STATUS](state, id) {
            return state.customers = state.customers.map((customer) => customer.id === id ? { ...customer, status: !customer.status } : customer)
        },
        // customer
    }
const actions = {
        login(context) {
            context.commit("login");
        },
        getCustomers(context) {
            axios.get('/api/customers')
            .then((response) => {
                context.commit('updateCustomers', response.data.customers);
            })
        },
        // customer
        async actionCustomerFetch({ commit }) {
            let response = await getCustomerList()
            console.log(response)
            // if (response.status == 200 ) {
                return commit(CUSTOMER_FETCH, response.data.customers)
            // }
        },
    
        async actionCustomerAdd({ commit }, customer) {
            let response = await addCustomer(customer)
    
            // if (response.status == 200) {
                return commit(CUSTOMER_ADD, response.data)
            // }
        },
        // customer
    }
export default {
    state,
    getters,
    actions,
    mutations
}