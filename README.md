# ProgressBar 
 This es6 module contains a progress html5 element <progress>. This module is written in es6. The progress element reacts on progress in a process, starting with a nodelist. This nodeList must be a javascript nodeList(will be converted to an array).
 This module has been unit tested as well as tested in most common devices/browsers on desktop and mobile including IE10/11.
 It will be build using webpack and babel
 
 This module can be imported on pages with for example: forms with multiple steps 

# Documentation progress bar

# Installation 

```shell
$ npm install
$ npm run serve
$ npm run build
$ npm run dev
$ npm start
$ npm test
$ npm run eslint # also present in webpack config: eslint-loader
```

<ul>
<li>Run 'npm install' > 
This will install the dependencies first </li> 
<li>'npm run serve' will build the project in development mode and watches the files changed, it creates a 'dist' folder and startup a static server
which listens to http://localhost:8081/</li>
<li>'npm run build' will run eslint first and will build the project in production mode using Webpack and creates a 'dist' folder with all the built files which is the root folder of localhost</li>

<li>'npm run dev' will build project in development mode </li>
<li>'npm test' will start karma test runner to unit test the javascript files and watch in development mode, it will create a 'coverage' folder with html output to view the test report </li>
</ul>


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

### Unit testing

The javascript source files are unit tested using karma as test runner and jasmine as test framework. 
All unit tests are included with full coverage report using istanbul
the test files have a glob pattern containing: `*.spec.js`



### Config files

Webpack 4 is used together with babel 7 to build js files. Postcss is used together with 2 plugins: 
- autoprefixer to prefix css properties.
- postcss-custom-properties as a fallback.

sass-loader and file-loader are used to bundle the css in a separate css file

- .babelrc : config babel settings
- .eslintrc.js : config eslint settings
- webpack.*.config.js : config webpack settings
- postcss.config.js
- karma.conf.js : unit testing using Jasmine



### Example

In order to provide an example a simple html file with an unordered list to see the progress bar in action. Of course this can be more complex tabs or sections or whatever for example. Buttons or links to go to next section are disabled by default and the next button will be active until after the current one is invoked. 




