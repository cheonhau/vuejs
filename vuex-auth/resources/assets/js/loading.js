const types = {
    TOGGER_LOADDING : 'TOGGER_LOADDING'
}
const state = {
    is_loading : false
}

const getters = {
    is_loading : state => state.is_loading
}

const mutations = {
    [types.TOGGER_LOADDING] (state) {
        state.is_loading = !state.is_loading;
        let loading_element = document.getElementById('container-loading');
        if (state.is_loading) {
            loading_element.style.display = "block";
        } else {
            loading_element.style.display = "none";
        }
    }
}

const actions = {
    togger_loadding ({commit}) {
        commit(types.TOGGER_LOADDING);
    }
}

export default {
    state, getters, mutations, actions
}
