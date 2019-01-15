import vue from 'vue'

const mutations={
    SET_APP_NAME(state,parmas){
        state.appName=parmas
    },
    SET_APP_VERSION(state){
        vue.set(state,'appVersion','v3')
    }
}
export default mutations