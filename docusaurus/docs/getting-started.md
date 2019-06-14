---
id: getting-started
title: Getting Started
---

React Generator CLI is a CLI tool to generate your working React application with minimal and important configurations. It is not an officially supported CLI tool for React application. To generate a project, you no need any additional configuration.

## Quick Start

```sh
npx @itchef/rg-cli new my-app
cd my-app
npm start
```

> If you've previously installed `rg-cli` globally via `npm install -g rg-cli`, the you can run the following,
```sh
rg new my-app
cd my-app
npm start
```

> It is always recommended to use the latest version of rg-cli. Using `npx` it is the best way to generate a new react application, as it always uses the `latest` version.

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.

When you’re ready to deploy to production, create a minified bundle with `npm run build`.

### Get Started Immediately

You **don’t** need to install or configure tools like Webpack or Babel. They are preconfigured and packaged with your newly generated app.

Just create a project, and you can launch your application seamlessly.

## Creating an App

**You’ll need to have Node >= 9 on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

## Output

Running any of these commands will create a directory called `my-app` inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── __mocks__
├── node_modules
│   ├── fileMock.js
│   └── styleMock.js
├── jest.config.js
├── package.json
├── package-lock.json
├── src
│   ├── assets
│   │   └── images
│   │       └── Logo.png
│   ├── index.html
│   ├── js
│   │   ├── App
│   │   │   ├── index.js
│   │   │   ├── index.scss
│   │   │   └── index.test.js
│   │   └── index.js
│   └── setupTests.js
└── webpack.config.js
```

No configuration or complicated folder structures, just the files you need to build your app. Once the installation is done, you can open your project folder:

```sh
cd my-app
```

## Scripts

Inside the newly created project, you can run some built-in commands:

| Tasks        | Description    |
| ------------- |:-------------:|
| **npm start** | Boots your application up on http://localhost:8080/  |
| **npm build** | Builds your application in production mode.|
| **npm test** | Run jest unit test cases of the newly created application |
| **npm run test:coverage** | Run jest unit test cases with coverage |
| **npm run test:watch** | Run jest unit test cases on watch mode |
| **npm run pretty** | Run the prettier checks |
| **npm run lint** | Run eslint checks for the application |
| **npm run lint:fix** | Fix ESLint issues |
| **npm run lint:styles** | Run style lint checks for the application |

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.
