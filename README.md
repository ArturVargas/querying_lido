# Code Example Querying Subgraph in a frontend App

En este ejemplo vemos como consumir un subgrafo desde un frontend con ReactJS

## Prerequisitos

* NodeJS Instalado
* The Graph Studio user
* GRT minimum 10 GRT
* Github user to upload and share our code

### Links

* [Subgraph Used in this tutorial](https://thegraph.com/explorer/subgraphs/F7qb71hWab6SuRL5sf6LQLTpNahmqMsBnnweYHzLGUyG?v=0&view=Playground&chain=arbitrum-one)
* [URQL DOCS](https://commerce.nearform.com/open-source/urql/)

* [Subgraph Studio](https://thegraph.com/studio/)

## Vite Docs

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
