# React Challenge

In this challenge we want you to create a tiny app which allows you to search for a city and get back a visualization (time series graph) of the city's temperature forecast for the next 16 days.

You'll need to use React & Redux to solve the challenge. We've provided you with boilerplate code so that can dive straight into the coding without worriying about the setup.

Use the [OpenWeatherMap API](https://openweathermap.org/api) to get the temperature forecast.

As for the time series graph, you can use whatever visualization library you prefer.

## How to use it

Installing:

    git clone https://github.com/perborgen/react-challenge.git
    npm install

Commands:

    npm run dev /* Runs webpack dev server and live reloading */
    npm run start /* Runs webpack in production mode with optimizations */

## Folder structure

```
├── src
│   ├── index.js // Renders everything
│   ├── App.jsx // Main component
│   ├── store.js // Redux store generator
│   ├── components // Pretty much explains itself
│   ├── actions // Dispatch executers
│   ├── reducers // Redux Reducers
├── dist // Compiled files goes here
├── package.json
├── .babelrc
├── .eslintrc
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
└── .gitignore
```

## Content

* Webpack
* Babel (env, react and stage-0)
* React
* Redux
* Styled Components
* ESlint
