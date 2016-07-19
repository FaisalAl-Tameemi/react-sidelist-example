React Playlist Example
=====================

A simple React app that displays a list of videos in a sidenav and a video player.

### Usage

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)


### Starter Kit

[React Simple Starter](git@github.com:lighthouse-labs/react-simple-boilerplate.git)

Clone the boilerplate and create your own git repo.

```
git clone git@github.com:lighthouse-labs/react-simple-boilerplate.git
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```
