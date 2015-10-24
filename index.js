module.exports = {
  "extends": "eslint:recommended",
  "ecmaFeatures": {
    "modules": true
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "rules": {
    "array-bracket-spacing": [2, "always"],
    "comma-dangle": [2, "never"],
    "eol-last": 2,
    "no-multiple-empty-lines": 2,
    "object-curly-spacing": [2, "always"],
    "quotes": [2, "single", "avoid-escape"],
    "semi": [2, "never"],
    "strict": 0,
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, {"anonymous":"always","named":"never"}]
  }
}
