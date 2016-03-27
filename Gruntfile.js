'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', 'artifact']
    });
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: require('./package.json'),
        clean: {
            test: {
                src: ['test/results']
            }
        },
        dist: requireConfig('dist')(grunt),
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        'json-minify': {
            build: {
                files: 'client/json/*.json'
            }
        },
        injector: requireConfig('injector.js')(),
        connect: requireConfig('connect.js')(),

        uglify: requireConfig('uglify.js')(),
        cssmin: requireConfig('cssmin.js')(),
        jsbeautifier: requireConfig('jsbeautifier.js')(),
        jshint: requireConfig('jshint.js')(),
        ngtemplates: requireConfig('ngTemplates.js')(),
        casper: requireConfig('casper.js')(),
        watch: requireConfig('watch.js')(),
        copy: requireConfig('copy.js')(),
        nodemon: requireConfig('nodemon.js')()
    });

    grunt.registerTask('default', ['build:local:debug', 'nodemon', 'watch']);
    grunt.registerTask('checkCode', ['jsbeautifier']);

    grunt.registerTask('test', 'Test with casper for different environments', function(env) {
        env = (!env) ? 'localhost' : env;
        grunt.task.run('connect:test', 'casper:local');
        grunt.task.run('karma');
    });
    grunt.registerTask('test:reset', 'Test with casper for different environments', function(env) {
        env = (!env) ? 'localhost' : env;
    });
    grunt.registerTask('build:local:debug', ['checkCode', 'cssmin', 'ngtemplates:debug', 'uglify:debug', 'injector:build', 'json-minify:build']);
    grunt.registerTask('build:local', ['checkCode', 'ngtemplates:build', 'uglify:build', 'injector:build', 'json-minify:build']);
    grunt.registerTask('build', ['build:local:debug', 'dist:prepare', 'copy:all', 'dist:publish']);
    grunt.registerTask('prodBuild', ['updatePackageJSONToRelease', 'build']);


    grunt.registerTask('updatePackageJSONToRelease', function() {
        var fs = require('fs');
        var file_content = fs.readFileSync('package.json');
        var content = grunt.pkg ? grunt.pkg : JSON.parse(file_content);

        content.name = content.name + '-release';

        grunt.pkg = content;
        fs.writeFileSync('package.json', JSON.stringify(content));
    });

    function requireConfig(file) {
        return require('./gruntConfig/' + file);
    }
};
