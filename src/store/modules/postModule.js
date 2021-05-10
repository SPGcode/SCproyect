import getPostService from '../../Services/posts.services'

const state = () => ({
    allPosts: []
})

const getters = {

}

const mutations = {
    setPosts(state, result){
        state.allPosts = result
    }

}

const actions = {
    getPosts({commit}){
        getPostService.getPosts()
        .then((data) => {
            commit('setPosts', data)
        });
        
        
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}