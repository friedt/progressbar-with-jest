# ProgressBar 
 This is a html5 element <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress">`<progress>`</a> which is created on the page when needed. This small module is written in vanillaJS,
 arrayOfElements is a parameter and must be a javascript nodeList(will be converted to an array).
 The element can be put in your html source. If it is not present in the html source, it will be created by the module directly after the `<body>` tag.
 This module is tested in most common devices/browsers on desktop and mobile including IE10/11
 
 This HTML element can be used on pages with for example: forms or sections with multiple steps 

# Documentation progress bar

This is an ES6 module which can be included. The css(scss) and HTML are separate and can be customized for your own styleguide.  

# Installation 

```shell
$ npm install
$ npm run serve
$ npm run build
$ npm run dev
$ npm start
$ npm run eslint // this is already part of the webpack configuration
```

<ul>
<li>Run 'npm install' > 
This will install the dependencies first </li> 
<li>'npm run serve' will build the project in development mode and watches the files changed, it creates a 'dist' folder and startup a static server
which listens to http://localhost:8081/</li>
<li>'npm run build' will run eslint first and will build the project in production mode using Webpack and creates a 'dist' folder with all the built files which is the root folder of localhost</li>

<li>'npm run dev' will build project in development mode </li>
</ul>

TODO setup unit testing

# Configuration

### Webpack
This project uses Webpack as a buildtool which is configured in webpack.development.config.js for local development. <br>
and webpack.production.config.js for production environment.
There are 3 loaders configured which handle the html, scss and js files.<br>
To get more information about the configuration options, see: <a href="https://webpack.js.org">https://webpack.js.org</a>

Webpack Plugins used:
- https://webpack.js.org/plugins/html-webpack-plugin/
- https://webpack.js.org/plugins/copy-webpack-plugin/
- https://webpack.js.org/plugins/uglifyjs-webpack-plugin/

### Source Folder Structure



src/

It consists of a:
<ul>
<li>'sass' folder which containes all the scss files</li>
<li>'javascript' folder which contains the es6 javascript partials which are bundled by webpack 
<li>'html' folder which contains the example.html
</li>
</ul>



### Config files

Webpack 4 is used together with babel 7 to build js files. Postcss is used together with 2 plugins: 
- autoprefixer to prefix css properties.
- postcss-custom-properties as a fallback.

sass-loader and file-loader are used to bundle the css in a separate css file

- .babelrc : config babel settings
- .eslintrc.js : config eslint settings
- webpack.*.config.js : config webpack settings
- postcss.config.js

### Example

In order to provide an example a simple html file with an unordered list to see the progress bar in action. Of course this can be more complex tabs or sections or whatever for example. Buttons or links to go to next section are disabled by default and the next button will be active until after the current one is invoked.




