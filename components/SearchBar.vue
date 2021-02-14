<template>
    <div>
        <input class="search-bar__input" type="text" v-model="query" @keydown.enter="fetchQuery" />
        <div>
            {{ $store.search.query }}
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

const ql: string = `
  query {
      search(type: REPOSITORY, query: "enp", first: 10) {
        repositoryCount
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
        }
        edges {
          node {
            ... on Repository {
              name
              id
              sshUrl
              url
            }
          }
        }
      }
  }`

import config from './../settings'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
    name: 'SearchBar',
    methods: {
        ...mapActions({ fetchQuery: 'setSearchQuery' }),
        // fetchQuery() {
        //     this.$store.dispatch('setSearchQuery', this.searchQuery)
        //     this.$store.dispatch('fetchSearchQuery')
        // if (this.isLoading) {
        //     return
        // }

        // this.isLoading = true
        // this.$axios.setHeader('Content-Type', 'application/json')
        // this.$axios.setToken(config.GITHUB_TOKEN, 'Bearer')

        // return await this.$axios
        //     .$post(config.GITHUB_API_URL, {
        //         query: ql,
        //     })
        //     .finally(() => (this.isLoading = false))
        //     .catch(error => console.error(error))
        // },
    },
    computed: {
        // ...mapGetters({ query: 'getQuery' }),
    },
    data() {
        return {
            searchQuery: '',
            isLoading: false,
        }
    },
})
</script>
