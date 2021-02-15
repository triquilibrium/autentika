import { Translations } from '@/interfaces/translations'

export const state = (): Translations => ({
    searchInfo: 'Search repositories by name, please type at least 3 signs and press enter',
    back: 'back',
    emptyResults: 'no results.',
    author: 'author',
})

export const getters = {
    getTranslation(state: any) {
        return state
    },
}
