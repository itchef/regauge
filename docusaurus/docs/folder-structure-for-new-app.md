---
id: folder-structure-for-new-app
title: Folder Structure
---

After creation of your new app, the project should look like the followings,

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

For the project to build, these filenames should not be changed,

* webpack.config.js
* src/index.html
* src/js/index.js

You can delete or rename other files.

You need to put js, css files inside `src` files, otherwise webpack will not detect the changes.

To run your test cases, do not delete these files,

* jest.config.js
* `__mocks__/**`
* src/setupTests.js

If you want to changes anything regarding tests, please follow [jest docs](https://jestjs.io/docs/en/getting-started).
