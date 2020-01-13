import { getCustomerList, addCustomer, editCustomer, deleteCustomer, getCustomer } from './api'

const CUSTOMER_FETCH            = 'customer_fetch';
const CUSTOMER_ADD              = 'customer_add';
const CUSTOMER_TOGGLE_STATUS    = 'customer_toggle_status';
const CUSTOMER_EDIT             = 'customer_edit';
const CUSTOMER_DELETE           = 'customer_delete';
// const TODO_DELETE = 'todo_delete'

const state = {
    customers: []
}
const getters = {
    customers(state) {
        return state.customers;
    }
}
const mutations = {
    updateCustomers(state, payload) {
        state.customers = payload;
    },
    [CUSTOMER_FETCH](state, customers) {
        return state.customers = customers
    },

    [CUSTOMER_ADD](state, customer) {
        return state.customers = customer;
    },

    [CUSTOMER_TOGGLE_STATUS](state, id) {
        return state.customers = state.customers.find((customer) => customer.id == id);
    },

    [CUSTOMER_EDIT](state, customer_edit) {
        return state.customers.data = state.customers.data.map((customer) => customer.id == customer_edit.id ? customer_edit : customer)
        // return state.customers = state.customers.map((customer) => customer.id === customer_edit.id ? { ...customer, status: !customer.status } : customer)
    },

    [CUSTOMER_DELETE](state, customer) {
        return state.customers = customer;
        // return state.customers.data = state.customers.filter((todo) => todo.id !== id)
        // state.customers.splice(state.customers.indexOf(id), 1);
    }
}

const actions = {
    getCustomers(context) {
        axios.get('/api/customers')
        .then((response) => {
            context.commit('updateCustomers', response.data.customers);
        })
    },
    // customer
    async actionCustomerFetch({ commit }, page) {
        try {
            let response = await getCustomerList(page)
            // if (response.status == 200 ) {
                return commit(CUSTOMER_FETCH, response.data.customers)
            // }
        } catch (error) {
            return error;
        }
    },

    async actionCustomerAdd({ commit, state }, customer) {
        let page = state.customers.current_page;
        console.log(state.customers.current_page)
        let response = await addCustomer(customer, page);
        if ( response.data ) {
            commit(CUSTOMER_ADD, response.data.customer);
        }

        return response;
    },
    async actionCustomerEdit ({ commit }, {id, customer} ) {
        // console.log(id, customer);
        let response = await editCustomer(id, customer);
        
        if ( response.data ) {
            commit(CUSTOMER_EDIT, response.data.customer);
        }
        return response;
    },
    async actionCustomerChangeStatus({ commit }, id) {
        return commit(CUSTOMER_TOGGLE_STATUS, id)
    },
    async actionCustomerGet({ commit }, id) {
        try {
            let response = await getCustomer(id);
            commit(CUSTOMER_FETCH, response.data.customer);
            return response;
        } catch (error) {
            return error;
        }
    },

    // async actionCustomerChangeStatus({ commit }, { id, status }) {
    //     let response = await getCustomer(id, { status })

    //     if (response.status == 200) {
    //         return commit(CUSTOMER_TOGGLE_STATUS, id)
    //     }
    // },

    async actionCustomerDelete({ commit, state }, id) {
        let page = state.customers.current_page;
        let response = await deleteCustomer(id, page)
        if ( response.data ) {
            commit(CUSTOMER_DELETE, response.data.customer);
        }
        return response;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
