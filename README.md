# Node.js Typescript Starter

A node.js starter with typescript, eslint, prettier, unit testing and a logging util.

## Getting Started

### Installation

This repo assumes you have node.js installed using [NVM](https://github.com/nvm-sh/nvm).

1. Run `nvm use` to install the required version of Node.js
2. Run `npm install` to install dependencies

### Development

Run `npm start` to compile code and run.

Run `npm start:dev` to compile and watch for changes, recompiled and run.

### Testing

Run `npm run test` to run any tests matching `src/**/*.spec.ts`.

### Build

Run `npm run build` to generate a build of the code in the `./dist` directory.

## Features

### Typescript

Includes ts-node and ts-node-dev to compile code and/or watch for changes and recompile.

### Code quality

Includes eslint and prettier configured at the root of the application.

### Testing

Includes Mocha, Chai and Sinon for testing. Tests should match the pattern of `{somefile}.spec.ts`.

### Configuration

Includes dotenv by default. You may create a root-level `.env` file to pass configuration values to the application.

### Logging

Includes winston as a logging library (see `./src/util/log.ts`). Usage is as follows:

```typescript
import Logger from './util/log

Logger.error('I am an error!')
```

### Misc

Lodash is also included.

## Contribution

This repo was created out of a frequent need to spin up smaller Node.js projects and provides some boilerplate to start building apps. Feel free to contribute, but the intent of this repo is generally for my personal usage :).

