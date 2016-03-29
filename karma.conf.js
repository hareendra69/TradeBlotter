module.exports = function(config) {
    config.set({
        basePath: '.',
        files: [
            'client/bower_components/jquery/dist/jquery.js',
            'client/bower_components/angular/angular.js',
            'client/bower_components/angular-ui-router/release/angular-ui-router.js',
            'client/bower_components/angular-mocks/angular-mocks.js',
            'client/bower_components/angular-bootstrap/ui-bootstrap.js',    
            'client/modules/module.js',
            'client/modules/**/*.js',
            'client/test/unit/*_spec.js'
        ],
        singleRun: true,
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ],
        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    })
};