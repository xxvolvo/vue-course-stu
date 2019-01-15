const state={
  userName:'userName'
}
const mutations={
  //
}
const actions={
  //
}
const getters={
  firstLetter:(state)=>{
    return state.userName.substr(-1,1)
  }
}
export default{
  state,
  mutations,
  actions,
  getters
}
