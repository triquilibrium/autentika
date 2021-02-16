import { Translations } from '@/interfaces/translations'

export const state = (): Translations => ({
    searchInfo: 'Search repositories by name, please type at least 3 signs and press enter',
    searchPlaceholder: 'type here...',
    searchValidQuery: 'please type at least 3 signs',
    back: 'back',
    emptyResults: 'no results.',
    author: 'author',
    at: 'at',
    lastCommits: 'last commits:',
    createdBy: 'created by',
    githubPage: 'see on github',
    cloneRepository: 'clone repository',
    commit: 'commit',
    page: 'page',
    previous: 'previous',
    next: 'next',
})

export const getters = {
    getTranslation(state: any) {
        return state
    },
}
