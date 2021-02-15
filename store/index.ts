export const state = () => ({
    isLoading: false,
})

export const mutations = {
    toogleLoading(state: any, payload: boolean) {
        state.isLoading = payload
    },
}
