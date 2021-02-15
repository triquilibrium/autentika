import settings from '../settings'

export const state = () => ({
    githubApi: settings.GITHUB_API_URL,
    token: settings.GITHUB_TOKEN,
    search: {
        results: {},
    },
    repository: {},
})

export const mutations = {
    setSearchResults(state: any, payload: object) {
        state.search.results = payload
    },
    setResult(state: any, payload: number) {
        state.repository = state.search?.results?.edges[payload]
    },
}

export const getters = {
    getResults(state: any) {
        return state.search?.results?.edges
    },
}
