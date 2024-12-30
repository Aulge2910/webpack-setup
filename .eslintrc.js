const { sources } = require("webpack");
const {} = require('eslint-plugin-only-warn')
module.exports = {
    extends: ["eslint:recommended"],
    env: {
        node:true,
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module"
    },
    rules: {
        "no-var": 0,
         "eqeqeq": "off",
         "no-unused-vars": 0   
 
    },
};
