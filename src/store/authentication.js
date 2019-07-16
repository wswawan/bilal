// import router from "../router";

export default {
    namespaced: true,
    state: {
        roles: [],
        registerEmail: null,
        registerPassword: null,
        registerRole: null,
        registerError: null,
        snackbar: false,
        passwordToMatch: null,
        token: null,
    },
    actions: {
        fetchRoles({commit}){
            return axios.get('/roles')
                .then(({data}) => {
                    commit('setRoles', data)
                })
        },
        register({commit, state}){
            return axios.post('/register', {
                email: state.registerEmail,
                password: state.registerPassword,
                role: state.registerRole,
            })
                .then(({data}) => {
                    commit('setToken', data.token)
                })
                .catch( (error) =>{
                    commit('setRegisterError', error.response.data)
                    commit('setSnackbar')

                })
        }
    },
    getters:{
        
    },
    mutations:{
        setToken(state, token){
            state.token = token
        },
        setRegisterError(state, error){
            state.registerError = error
        },
        setRegisterEmail(state, email){
            state.registerEmail = email
        },
        setRegisterPassword(state, password){
            state.registerPassword = password
        },
        setRegisterRole(state, role){
            state.registerRole = role
        },
        setRoles(state, roles){
            state.roles = roles
        },
        setPasswordToMatch(state, PasswordToMatch){
            state.passwordToMatch = PasswordToMatch
        },
        setSnackbar(state, snackbar){
            state.snackbar = !snackbar
        }
    }
}