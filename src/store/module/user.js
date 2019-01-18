import vue from 'vue'
import { login } from '@/api/user'
import { setToken } from '@/lib/util'
import { resolve, reject } from 'q';

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
  },
  login({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      login({ username, password }).then(res => {
        console.log(res)
        if (res.accessToken) {
          setToken(res.accessToken)
          resolve()
        }
        else {
          reject(new Error('错误'));
        }
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
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
