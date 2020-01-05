import { getCustomerList, addCustomer, getCustomer } from './api'

const CUSTOMER_FETCH = 'customer_fetch';
const CUSTOMER_ADD = 'customer_add';
const CUSTOMER_TOGGLE_STATUS = 'customer_toggle_status';
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
        return state.customers = [customer, ...state.customers]
    },

    [CUSTOMER_TOGGLE_STATUS](state, id) {
        return state.customers = state.customers.find((customer) => customer.id == id);
    },

    // [CUSTOMER_TOGGLE_STATUS](state, id) {
    //     return state.customers = state.customers.map((customer) => customer.id === id ? { ...customer, status: !customer.status } : customer)
    // },

    // [TODO_DELETE](state, id) {
    //     return state.customers = state.customers.filter((todo) => todo.id !== id)
    //     // state.customers.splice(state.customers.indexOf(id), 1);
    // }
}

const actions = {
    getCustomers(context) {
        axios.get('/api/customers')
        .then((response) => {
            context.commit('updateCustomers', response.data.customers);
        })
    },
    // customer
    async actionCustomerFetch({ commit }) {
        try {
            let response = await getCustomerList()
            // if (response.status == 200 ) {
                return commit(CUSTOMER_FETCH, response.data.customers)
            // }
        } catch (error) {
            return error;
        }
    },

    async actionCustomerAdd({ commit }, customer) {
        let response = await addCustomer(customer);
        console.log(response);
        if ( response.data ) {
            commit(CUSTOMER_ADD, response.data.customer);
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
    }

    // async actionCustomerChangeStatus({ commit }, { id, status }) {
    //     let response = await getCustomer(id, { status })

    //     if (response.status == 200) {
    //         return commit(CUSTOMER_TOGGLE_STATUS, id)
    //     }
    // },

    // async actionTodoDelete({ commit }, id) {
    //     let response = await apiDeleteTodo(id)

    //     if (response.status == 200) {
    //         return commit(TODO_DELETE, id)
    //     }
    // }
}

export default {
    state,
    getters,
    actions,
    mutations
}
