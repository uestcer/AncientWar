// Karma configuration
// Generated on Wed Nov 05 2014 07:16:09 GMT+0800 (中国标准时间)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'bower_components/yoop/yOOP.js',
            'bower_components/yyctoolbox/tool/yTool.js',
            'bower_components/jquery/jquery.js',
            'bower_components/yEngine2D/dist/yEngine2D.js',
            'test/hepler/**',

            "src/layer/SmallMapLayer.js",
            "src/sprite/Sprite.js",
            "src/sprite/SelectableSprite.js",
            "src/sprite/EntitySprite.js",
            "src/sprite/CharacterSprite.js",
            "src/sprite/ResourceSprite.js",

            "src/**",

            "test/unit/**"
        ],


        // list of files to exclude
        exclude: [
            "src/data/**"
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
