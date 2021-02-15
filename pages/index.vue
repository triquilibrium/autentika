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
    display: flex;
    flex-direction: column;
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
@media only screen and (min-width: 768px) {
    .container {
        max-width: 80%;
    }
}
</style>
