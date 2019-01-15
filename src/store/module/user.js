import vue from 'vue'

const state = {
  userName: 'userName'
}
const mutations = {
  SET_USER_NAME(state, parms) {
    state.userName = parms
  }
}
const actions = {
  updateUserName({ commit, state, rootState }) {
   dispatch('other action')
  }
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(-1, 1)
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
