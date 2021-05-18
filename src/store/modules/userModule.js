import {auth} from '../../firebase'
import router from '../../router'

const state = () => ({
    user: null,
    error: null
})

const getters = {

}

const mutations = {
    setNewUser(state, result){
        state.user = result
    },
    setError(state, result){
        state.error = result
    }
}



const actions = {
    getNewUser({commit}, newUser){
        auth.createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(res =>{
            const resUser = {
                email: res.user.email,
                uid: res.user.uid
            }
            commit('setNewUser', resUser)
            router.push('/')
        })
        .catch(err =>{
            commit('setError', err.message)
        })
        
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}