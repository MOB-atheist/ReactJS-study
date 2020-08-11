<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="Project logo"></a>

</p>

<h3 align="center">ReactJs study</h3>

<div align="center">

  [![GitHub Issues](https://img.shields.io/github/issues/MOB-atheist/ReactJS-study?style=flat-square)](https://github.com/MOB-atheist/ReactJS-study/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/MOB-atheist/ReactJS-study?style=flat-square)](https://github.com/MOB-atheist/ReactJS-study/pulls)

</div>

---

<p align="center">Here well have some examples using ReactJs features, like components, also there is going to be napplied some advanced techniques with webpacker and packages management.

The React script doesn't have much to it right now, because i am building a very complete and reliable wepacker configuration, togheter with a npm package configuration that suits most uses.

The project Can be reused for many purposes, as it creates a very complete html file, including favicons compatibility with most browsers and many other features like defer and async to allow for a very good SEO experience
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Prerequisites](#prerequisites)
- [Installing](#installing)
- [Usage](#usage)
- [Deployment](#deployment)
- [Dependencies](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
This repository will be used for studying ReactJs, React native, React router, Webpacker.

### Prerequisites <a name = "prerequisites"></a>
These are the softwares you need to start working.

```

 - Node >= 12
 - Npm
 - Webpacker >= 4

```

### Installing <a name = "installing"></a>
You will need to have installed [NodeJs](https://nodejs.org/en/) higher than 12.

To show the node verion.

```bash
node -v
```

After installed, navigate to the folder at the command line and run the npm command

```bash
npm install
```

This command will create node_modules folder with all dependencies

After all is done, start the webpacker file wacther using the command.

```bash

npm run dev

```

This may take some time as favicon generator will create a cache file and all favicons files.

Or you can use the production command.

```bash

npm run build

```

To start the webpack-dev-server for development environment.

```bash

npm run start

```

By default the server will start at [localhost:9000](localhost:9000), you can change that in webpack.config.js.

```javascript
    devServer: {
      contentBase: path.join(__dirname, '/public'),
      host: 'localhost',
      compress: true,
      port: 9000
    }
```

## 🎈 Usage <a name="usage"></a>
To edit the content please work with the assets folder.

If needed to create another html page, add another instance of *HtmlWebpackPlugin*  to the webpack.config.js file, like the code below.

```javascript

    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'assets/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: '../test.html',
      template: 'assets/test.html'
    })

```

To add or remove any file from the bundle excluding html files, please use *all.js* inside assets to specify what is loaded.

```javascript

// DEPENDENCIES //
const file = require('packageName');
// CSS //
const file = require('./css/file.css');
// JS //
const file = require('./js/file.js');

```

The only script that cannot be changed at *all.js* is *loader.js*, this file is responsible for the app loading screen, he is required at *webpack.config.js*

``` javascript

    entry: {
      'loader': path.resolve(__dirname, 'loader.js')
    }

```

## 🚀 Deployment <a name = "deployment"></a>
For production bundle you can use.

```bash
npm run build
```

## ⛏️ Built Using <a name = "built_using"></a>
- [ReactJs](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>
- [@MOB-atheist](https://github.com/MOB-atheist) - Idea & Initial work

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>
- Hat tip to anyone whose code was used