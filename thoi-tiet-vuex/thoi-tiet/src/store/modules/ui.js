const types = {
    TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR' 
  }
  
  // initial state
  const state = {
    sidebarOpen: false
  }
  
  // getters
  const getters = {
    sidebarOpen: state => state.sidebarOpen
  }
  
  // mutations
  const mutations = {
    [types.TOGGLE_SIDEBAR] (state) {
      state.sidebarOpen = !state.sidebarOpen
    }
  }
  
  // actions
  const actions = {
    toggleSidebar ({ commit }) {
      commit(types.TOGGLE_SIDEBAR)
    }
  }
  
  
  export default {
    state,
    getters,
    actions,
    mutations
  }