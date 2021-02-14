import Vue from 'vue'
import Vuex from 'vuex'
import settings from './../settings'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        githubApi: settings.GITHUB_API_URL,
        token: settings.GITHUB_TOKEN,
        isLoading: false,
        search: {
            query: '1111',
            results: {},
        },
    },

    mutations: {
        setSearchQuery(state, payload) {
            state.search.query = payload
        },
        setSearchResults(state, payload) {
            state.search.results = payload
        },
    },

    actions: {
        async fetchSearchQuery(state, payload) {
            if (this.state.isLoading) {
                return
            }

            this.state.isLoading = true
            this.$axios.setHeader('Content-Type', 'application/json')
            this.$axios.setToken(settings.GITHUB_TOKEN, 'Bearer')

            return await this.$axios
                .$post(settings.GITHUB_API_URL, {
                    query: settings.GITHUB_SEARCH_QUERY(this.state.search.query),
                })
                .then(result => state.commit('setSearchResults', result.data.query))
                .finally(() => (this.state.isLoading = false))
                .catch(error => console.error(error))
        },
    },
    getters: {
        getQuery: state => state.search.query,
    },
})
