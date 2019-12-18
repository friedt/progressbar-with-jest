module.exports = function (config) {

    config.set({

        // frameworks to use
        frameworks: ['jasmine', 'jasmine-matchers', 'esm'],

        // preprocess matching files before serving gto browser
        preprocessors: {
            '*.js': ['coverage']
        },
        // list of file patterns to load in the BROWSER
        files: [
            // {
            //     pattern: 'node_modules/core-js/es/array/*.js',
            //     type: 'module'
            // },
            {
                pattern: 'src/javascript/*.js',
                type: 'module'
            },
            //'src/javascript/*.js',
            'src/javascript/*.spec.js'
        ],
        plugins: [
            '@open-wc/karma-esm',
            'karma-jasmine',
            'karma-jasmine-matchers',
            'karma-chrome-launcher',
            'karma-coverage',
        ],
        // test results reporters to use
        reporters: ['dots', 'coverage'],
        browsers: ['ChromeHeadless'],
        browserNoActivityTimeout: 6000,
        color: true,
        singleRun: true,
        coverageReporter: {
            dir: 'coverage/',
            reporters: [{
                type: 'html',
                subdir: 'html'
            }]
        },
        esm: {
            // if you are using 'bare module imports' you will need this option
            nodeResolve: true,
            // Whether to report test code coverage.
            coverage: true,
            // set compatibility mode to all: is default
            compatibility: 'none',
            babel: false
        }
    })
};
