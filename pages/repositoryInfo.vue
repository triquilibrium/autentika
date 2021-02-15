<template>
    <div class="repository-info container">
        <div class="repository-info__header">
            <h1>{{ repository.name }}</h1>
            <p>{{ translations.author }}: {{ repository.owner.login }}</p>
            <p>
                <a class="repository-info__link" :href="repository.url" target="_blank">
                    {{ translations.githubPage }}
                </a>
            </p>
        </div>
        <div class="repository-info__columns">
            <div class="repository-info__clone">
                <h3>{{ translations.cloneRepository }}</h3>
                <code class="repository-info__clone--link">{{ repository.sshUrl }}</code>
            </div>
            <div class="repository-info__commits">
                <h3>{{ translations.lastCommits }}</h3>
                <ul class="repository-info__commits-list">
                    <li
                        class="repository-info__commits-item"
                        v-for="(item, index) in repository.defaultBranchRef.target.history.edges"
                        :key="index"
                    >
                        <p>{{ translations.commit }}: {{ item.node.abbreviatedOid }}</p>
                        <p>
                            {{ translations.createdBy }}
                            <strong>{{ item.node.author.name }}</strong> {{ translations.at }}
                            {{ formatDate(item.node.committedDate) }}
                        </p>
                    </li>
                </ul>
                <div v-if="!repository.defaultBranchRef.target.history.edges">
                    {{ translations.emptyResults }}
                </div>
            </div>
        </div>
        <div class="container">
            <nuxt-link to="/" class="button--grey">{{ translations.back }}</nuxt-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import settings from '@/settings'

export default Vue.extend({
    name: 'repository-info',
    data() {
        return {
            result: parseInt(this.$route.params.index) || 0,
        }
    },
    computed: {
        ...mapGetters({
            results: 'search/getResults',
            translations: 'translations/' + settings.LANGUAGE + '/getTranslation',
        }),
        repository(): object {
            return this.results[this.result].node || {}
        },
    },
    methods: {
        formatNumber(value: string) {
            return value.length === 1 ? '0' + value : value
        },
        formatDate(date: string) {
            const commitDate = new Date(date)
            return [
                this.formatNumber(commitDate.getHours().toString()) +
                    ':' +
                    this.formatNumber(commitDate.getMinutes().toString()),
                this.formatNumber(commitDate.getDate().toString()) +
                    '/' +
                    commitDate.getMonth() +
                    1 +
                    '/' +
                    commitDate.getFullYear(),
            ].join(' ')
        },
    },
})
</script>

<style scoped>
.repository-info {
    margin: 20px auto;
    border: 3px solid #999;
    padding: 15px;
    background: #f4e8e8;
}
.repository-info__header {
    margin: 0 0 30px;
    padding: 0 0 20px;
    border-bottom: 1px dotted #999;
}
.repository-info__clone--link {
    display: block;
    padding: 8px;
    margin: 10px 0;
    border: 1px dotted #ccc;
    background: #eee;
}
.repository-info__link {
    text-decoration: underline;
    font-weight: bold;
}
.repository-info__columns {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.repository-info__commits {
    padding: 20px 0;
}

.repository-info__commits-item {
    display: block;
    margin: 7px 3px;
    padding: 10px;
    border: 1px dotted #999;
}

@media only screen and (min-width: 768px) {
    .repository-info__commits {
        padding: 0 10px 10px 20px;
        width: 50%;
    }
    .repository-info__columns {
        flex-direction: row;
    }
}
</style>
