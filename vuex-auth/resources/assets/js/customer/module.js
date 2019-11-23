import { getCustomerList, addCustomer, getCustomer } from './api'

const CUSTOMER_FETCH = 'customer_fetch'
const CUSTOMER_ADD = 'customer_add'
const CUSTOMER_TOGGLE_STATUS = 'customer_toggle_status'
// const TODO_DELETE = 'todo_delete'

const state = {
    customers: []
}

const mutations = {
    [CUSTOMER_FETCH](state, customers) {
        return state.customers = customers
    },

    [CUSTOMER_ADD](state, customer) {
        return state.customers = [customer, ...state.customers]
    },

    [CUSTOMER_TOGGLE_STATUS](state, id) {
        return state.customers = state.customers.map((customer) => customer.id === id ? { ...customer, status: !customer.status } : customer)
    },

    // [TODO_DELETE](state, id) {
    //     return state.customers = state.customers.filter((todo) => todo.id !== id)
    //     // state.customers.splice(state.customers.indexOf(id), 1);
    // }
}

const actions = {
    async actionCustomerFetch({ commit }) {
        let response = await getCustomerList()

        if (response.status == 200 ) {
            return commit(CUSTOMER_FETCH, response.data)
        }
    },

    async actionCustomerAdd({ commit }, customer) {
        let response = await addCustomer(customer)

        if (response.status == 200) {
            return commit(CUSTOMER_ADD, response.data)
        }
    },

    async actionCustomerChangeStatus({ commit }, { id, status }) {
        let response = await getCustomer(id, { status })

        if (response.status == 200) {
            return commit(CUSTOMER_TOGGLE_STATUS, id)
        }
    },

    // async actionTodoDelete({ commit }, id) {
    //     let response = await apiDeleteTodo(id)

    //     if (response.status == 200) {
    //         return commit(TODO_DELETE, id)
    //     }
    // }
}

export default {
    state,
    actions,
    mutations
}