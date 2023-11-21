
# PAULODEV-DS

PAULODEV-DS is a Design System built with React.

## Stack

This project uses as main dependencies: **vite**, **react**, **typescrip**, **storybook**, **styled-components**

For unit tests it uses **react-testing-library** and **jest**

For code patterns and best practices uses **prettier** and **eslint** with **airbnb** configs.

This project also uses **husky** to prevent commit and push messy and wrong code, also use **commitizen**, you'll be prompted to fill out any required commit fields at commit time.

Maybe you want to read about them:

- [vite](https://vitejs.dev/)
- [react](https://reactjs.org/)
- [typescrip](https://www.typescriptlang.org/)
- [storybook](https://storybook.js.org/)
- [styled-components](https://styled-components.com/)
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- [jest](https://jestjs.io/)
- [husky](https://github.com/typicode/husky) 
- [prettier](https://prettier.io/) 
- [commitizen](https://github.com/commitizen/cz-cli) 

## Overview

This project contains shareable styles of components, UI Components using React and Storybook's presentation and build configs need to stay here.

## Requirements

Use NodeJs version >=20

## Commands

#### Install
```sh
yarn install
```
#### Run storybook library
```sh
yarn storybook
```

## Run the local Project
``` sh
yarn dev
```

## Run the unit tests
``` sh
yarn test
```

## Running the local Project

- To test on a project that is consuming our package we can run our project with
``` sh
yarn run build
```

- To be exposed as a local package
``` sh
npm link
```

- In the project that consumes this package we will run the command
``` sh
npm link paulodev-ds
```

## 📝 License

Copyright © 2023
