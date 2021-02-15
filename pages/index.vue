<template>
    <div class="container">
        <SearchBar />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.container {
    margin: 0 auto;
    padding: 30px 15px;
    min-height: 100vh;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    /* justify-content: center;  */
    /* align-items: center; */
    /* text-align: center; */
}

.title {
    font-family: 'Quicksand', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
