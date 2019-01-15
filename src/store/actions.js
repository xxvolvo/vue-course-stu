import { getAppName } from '@/api/app'
import { async } from 'q';
const acitons = {
    // updateAppName({ commit }) {
    //     // getAppName().then(res => {
    //     //     const { code, info: { appName } } = res;
    //     //     commit('SET_APP_NAME', appName)
    //     // }).catch(err => {

    //     // })

    // }
    async updateAppName({ commit }) {
        try {
            const { info: { appName } } = await getAppName()
            commit('SET_APP_NAME', appName)
        }
        catch (err) {

        }

    }
}
export default acitons