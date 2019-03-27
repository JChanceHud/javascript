module.exports = {
  extends: [
    '@jchancehud/eslint-config',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
  }
};
