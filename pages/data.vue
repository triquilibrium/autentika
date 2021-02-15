<template>
    <div class="container">
        <ul>
            <li>{{ repository.url }}</li>
            <li>{{ repository.name }}</li>
        </ul>
        <div>
            <nuxt-link to="/" class="button--grey">back</nuxt-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
    data() {
        return {
            result: parseInt(this.$route.params.index),
        }
    },
    computed: {
        ...mapGetters({
            results: 'search/getResults',
        }),
        repository(): object {
            return this.results[this.result].node || {}
        },
    },
})
</script>
