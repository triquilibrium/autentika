module.exports = {
    root: true,
    extends: ['plugin:vue/recommended', 'eslint:recommended', 'prettier/vue', 'plugin:prettier/recommended'],
    globals: {
        $nuxt: true,
    },
    plugins: ['prettier', 'vue'],
    rules: {
        'vue/html-quotes': 'single',
        'vue/max-attributes-per-line': [
            2,
            {
                singleline: 1,
                multiline: {
                    max: 1,
                    allowFirstLine: false,
                },
            },
        ],
    },
    'prettier-vue': {
        // ignoring template tag
        SFCBlocks: {
            template: true,
        },
    },
}
