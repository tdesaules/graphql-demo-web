# GraphQLDemoWeb

## Introduction

Introduction

## Getting Started

Installation process to init the app.

Create root folder

```
mkdir GraphQLDemoWeb
cd GraphQLDemoWeb
```

Init webpack base

```
npm init -y
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin clean-webpack-plugin webpack-merge
npm install --save-dev pug pug-loader
npm install --save-dev node-sass sass-loader css-loader style-loader mini-css-extract-plugin
npm install --save-dev materialize-css
npm install --save-dev typescript ts-loader
```

Init Svelte framework

```
npm install --save-dev svelte svelte-loader svelte-preprocess
```

Prepare GraphQL client

```
npm install --save-dev apollo-boost graphql svelte-apollo
```

Node.js / Koa.js

```
npm install --save-dev koa koa-static koa-webpack socket.io socket.io-client @types/socket.io-client
npm install --save-dev node-fetch
```

## Build and Test

Build / Run

```
npm run build:dev
npm run build:prod
npm run start:dev
npm run start:prod
```

## Pipeline CI/CD



## Contribute

- tdesaules@outlook.com

## Ressource

- <https://webpack.js.org/>
- <https://pugjs.org/>
- <https://www.typescriptlang.org/>
- <https://materializecss.com/>
- <https://svelte.dev/>
- <https://github.com/sveltejs/svelte-loader>
- <https://github.com/sveltejs/template-webpack/blob/master/public/index.html>
- <https://github.com/kaisermann/svelte-preprocess/>
