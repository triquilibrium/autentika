<template>
    <div>
        <Nuxt keep-alive />
    </div>
</template>

<style>
html {
    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

a {
    color: #333;
    text-decoration: none;
}
.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
}
.button--grey:last-child {
    margin-left: 15px;
}

.button--grey:disabled {
    opacity: 0.6;
}
.button--grey:disabled:hover {
    cursor: none;
    background-color: #fff;
    color: #35495e;
}

.button--grey:hover {
    color: #fff;
    background-color: #999;
    cursor: pointer;
}

ul {
    padding: 0;
    list-style: none;
}
</style>
