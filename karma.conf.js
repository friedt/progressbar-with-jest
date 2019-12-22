const path = require('path');

module.exports = function (config) {

    config.set({

        // frameworks to use
        frameworks: ['jasmine', 'jasmine-matchers'],

        // plugins
        plugins: [
            //'karma-coverage',
            'karma-coverage-istanbul-reporter',
            'karma-spec-reporter',
            'karma-webpack',
            'karma-jasmine',
            'karma-jasmine-matchers',
            'karma-chrome-launcher',


        ],
        // preprocess matching files BEFORE serving to browser
        preprocessors: {
            //'*.js': ['coverage']
            'src/javascript/*.js': ['webpack'],
            //'src/javascript/!(*spec).js': ['coverage'],

        },
        autoWatch: true,
        usePolling: true, // very important to watch js files after change

        //  you don't need to specify the entry option because
        //  karma watches the test entry points
        // 	webpack watches dependencies
        webpack: {
            // webpack mode
            mode: 'development',
            entry: ['./src/javascript/index.js'],
            watch: true,
            module: {
                rules: [
                    // instrument only testing sources with Istanbul
                    {
                        //test: /^((?!spec).)*.js$/,
                        test: /.js$/,
                        use: [
                            {
                                loader: 'istanbul-instrumenter-loader',
                                options: {
                                    'esModules': true,
                                    'debug': true,
                                    'compact': false,
                                },

                            }
                        ],
                        include: path.resolve('src/javascript/')
                    }
                ]
            }
        },

        // list of file patterns to load in the BROWSER
        files: [
            'src/javascript/*.js',
            'src/javascript/*.spec.js'
        ],
        //list of files to exclude
        exclude: [],
        // test results reporters to use
        // reporters: ['spec', 'coverage'], //'spec' to see specs list
        reporters: ['spec', 'coverage-istanbul'],
        specReporter: {
            suppressErrorSummary: false,
            failFast: false
        },
        browsers: ['ChromeHeadless'], //ChromeHeadless
        browserNoActivityTimeout: 120000,
        // enable colors in reporter output
        color: true,
        singleRun: false,
        coverageIstanbulReporter: {
            reporters: [
                // reporters not supporting the `file` property
                ['html', 'lcovonly'],
            ],
            dir: path.join(__dirname, 'coverage'),
            'report-config': {
                // all options available at:
                html: {
                    // outputs the report in ./coverage/html
                    subdir: 'html'
                }
            },
        },
        // changed default output dir from 'coverage/'
        //     reports: [
        //         // reporters not supporting the `file` property
        //         ['html','lcovonly'],
        //     ],
        //     combineBrowserReports: true,
        //
        //
        // },
        // coverageReporter : {
        //     type : 'text',
        //     dir : 'coverage/',
        //     file : 'coverage.txt'
        // },
        // coverageReporter: {
        //     dir: 'coverage/',
        //     instrumenterOptions: {
        //          istanbul: { noCompact: true }
        //      },
        //     reporters: [ {
        //         type: 'lcovonly',
        //         //subdir: 'report-lcov'
        //     },]
        // }
    })
};