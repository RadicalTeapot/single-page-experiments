module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['standard'],
    parserOptions: { ecmaVersion: 12 },
    plugins: [
        'eslint-plugin-html',
    ],
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4],
        'no-multi-spaces': ['warn', { ignoreEOLComments: true }],
        'space-before-function-paren': ['warn', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
        }],
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
        }],
        curly: ['warn', 'multi-or-nest', 'consistent'],
    },
};
