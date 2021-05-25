import {auth} from '../../firebase'
import router from '../../router'

const state = () => ({
    user: null,
    error: null,
    userLogIn: null
})

const getters = {

}

const mutations = {
    setNewUser(state, result){
        state.user = result
    },
    setError(state, result){
        state.error = result
    },
    setLogIn(state, result){
        state.userLogIn = result
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
        
    },

    logInUser({commit}, user){
            auth.signInWithEmailAndPassword(user.mail, user.password)
            .then(res => {
                const resUserLogIn = {
                    mail: res.user.mail,
                    uid: res.user.uid
                }
                commit('setLogIn', resUserLogIn)
                router.push('/')
            })
            .catch (err => {
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