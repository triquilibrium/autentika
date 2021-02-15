<template>
    <div class="pagination">
        <button
            class="button--grey"
            :disabled="!availablePrevious || isLoading"
            @click.prevent="previousPage"
        >
            {{ translations.previous }} {{ translations.page }}
        </button>
        <button
            class="button--grey"
            :disabled="!availableNext || isLoading"
            @click.prevent="nextPage"
        >
            {{ translations.next }} {{ translations.page }}
        </button>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import settings from '@/settings'
import { mapGetters } from 'vuex'

export default Vue.extend({
    name: 'Pagination',
    props: {
        availablePrevious: Boolean,
        availableNext: Boolean,
    },
    methods: {
        previousPage() {
            return this.$emit('previous')
        },
        nextPage() {
            return this.$emit('next')
        },
    },
    computed: {
        ...mapGetters({
            translations: 'translations/' + settings.LANGUAGE + '/getTranslation',
        }),
        isLoading() {
            return this.$store.state.isLoading
        },
    },
})
</script>

<style scoped>
.pagination {
    display: flex;
    padding: 30px 15px;
    flex-direction: row;
    justify-content: center;
}
</style>
