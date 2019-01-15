import vue from 'vue'

const mutations={
    SET_APP_NAME(state,parmas){
        state.appName=parmas
    },
    SET_APP_VERSION(state){
        vue.set(state,'appVersion','v3')
    },
    SET_INPUTED_VALUE(state,parmas)
    {
        state.stateValue=parmas
    }
}
export default mutations