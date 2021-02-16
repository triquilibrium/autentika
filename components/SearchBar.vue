<template>
    <div class="search">
        <p class="search__instruction">
            {{ translations.searchInfo }}
        </p>
        <input
            class="search__query"
            type="text"
            :placeholder="translations.searchPlaceholder"
            v-model="query"
            @keydown.enter="fetchQuery()"
        />
        <ul class="search__list">
            <div v-if="!isValidQuery">{{ translations.searchValidQuery }}</div>
            <div v-if="isEmptyList">{{ translations.emptyResults }}</div>
            <li class="search__list-item" v-for="(item, index) in items" :key="index">
                <nuxt-link
                    class="search__list-item--link"
                    :to="{
                        path: `/data/${item.node.name}/${index}`,
                    }"
                >
                    {{ item.node.name }}
                    <div class="search__list-item--additional">{{ item.node.owner.login }}</div>
                </nuxt-link>
            </li>
        </ul>
        <Pagination
            v-if="items && (pageInfo.hasPreviousPage || pageInfo.hasNextPage)"
            :available-previous="pageInfo.hasPreviousPage"
            :available-next="pageInfo.hasNextPage"
            @previous="previousPage"
            @next="nextPage"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

import settings from '@/settings'
import { mapGetters, mapMutations } from 'vuex'
import Pagination from './Pagination.vue'
import { Data } from '@/interfaces/searchBar'
import { SearchBar } from '@/enums/searchBar'

export default Vue.extend({
    components: { Pagination },
    name: 'SearchBar',
    methods: {
        ...mapMutations({
            results: 'search/setSearchResults',
            isLoading: 'toogleLoading',
        }),
        nextPage(): void {
            this.pagesHistory.unshift(this.pageInfo.startCursor)
            this.fetchQuery(this.pageInfo.endCursor)
        },
        previousPage(): void {
            this.fetchQuery('', this.pagesHistory[SearchBar.PAGE_BACK])
            this.pagesHistory.shift()
        },
        async fetchQuery(startAfter?: string, startBefore?: string): Promise<any> {
            if (this.query.length < SearchBar.MIN_QUERY_LENGTH) {
                this.isEmptyList = false
                this.isValidQuery = false
                return
            }
            this.isValidQuery = true
            this.isLoading(true)

            this.$axios.setHeader('Content-Type', 'application/json')
            this.$axios.setToken(settings.TOKEN.replaceAll('---', ''), 'Bearer')

            return await this.$axios
                .$post(settings.GITHUB_API_URL, {
                    query: settings.GITHUB_SEARCH_QUERY(
                        this.query.toString(),
                        startAfter,
                        startBefore
                    ),
                })
                .then(result => {
                    const results = result.data.search

                    this.isEmptyList = results.edges.length ? false : true
                    this.results(results)
                })
                .finally(() => this.isLoading(false))
                .catch(error => console.error(error))
        },
    },
    computed: {
        ...mapGetters({
            items: 'search/getResults',
            pageInfo: 'search/getPageInfo',
            translations: 'translations/' + settings.LANGUAGE + '/getTranslation',
        }),
    },
    data(): Data {
        return {
            query: '',
            isEmptyList: false,
            isValidQuery: true,
            pagesHistory: [],
        }
    },
})
</script>

<style scoped>
.search__instruction {
    border: 3px solid #999;
    border-bottom: 0;
    text-transform: uppercase;
    padding: 5px;
    font-size: 10px;
    letter-spacing: 2px;
    background: #eee;
}
.search__query {
    display: block;
    margin: 0 0 30px;
    padding: 10px;
    width: 100%;
    border: 3px solid #999;
    font-size: 16px;
}
.search__list-item:nth-child(odd) {
    background: #eadfdf;
}
.search__list-item {
    background: #f4e8e8;
}
.search__list-item:hover {
    background: linen;
}
.search__list-item--link {
    display: block;
    padding: 8px;
    letter-spacing: 2px;
    font-size: 14px;
}
.search__list-item--additional {
    letter-spacing: 0;
    font-size: 12px;
}
</style>
