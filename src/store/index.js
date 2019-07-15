import Vue from "vue";
import Vuex from "vuex";
import authentication from "../store/authentication";

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        baseUrl: '/api'
    },
    modules: {
        authentication,
    },
    mutations: {

    },
    actions: {

    }
})