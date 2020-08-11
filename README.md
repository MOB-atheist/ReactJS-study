# ReactJS-study

Library dedicated for my studies in ReactJS and React native with a robust webpack configuration

## Installation

First and foremost install [node](https://nodejs.org/en/).
Please use versions equal or greater than 12, to see your version use the command:
```bash
node -v
```

After npm is installed, navigate to the folder at the command line and run the install command

```bash
npm install
```

## Usage

First, start the webpacker file wacther using the command , this may take some time as favicon generator will create a cache file and all favicons files.

```bash
npm run dev
```

Or you can use the production command.

```bash
npm run build
```

To start the webpack-dev-server for development envyroment.

```bash
npm run start
```

By default the server will start using the 9000 port, you can change that on webpack.config.js.

```javascript
    devServer: {
      contentBase: path.join(__dirname, '/public'),
      host: 'localhost',
      compress: true,
      port: 9000
    }
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.