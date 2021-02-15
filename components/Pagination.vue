<template>
    <div class="container">
        <button :disabled="!availablePrevious" @click.prevent="previousPage">previous page</button>
        <button :disabled="!availableNext" @click.prevent="nextPage">next page</button>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
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
})
</script>
