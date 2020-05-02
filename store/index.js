
// const state = {

// }

const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn
    },

    loggedInUser(state) {
        return state.auth.user
    }
}

const store = {
    /* state,*/ getters
}

export default store