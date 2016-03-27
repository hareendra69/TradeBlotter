'use strict';

module.exports = function() {
    return {
        js: {
            files: [
                'modules/*.js',
                'modules/**/*.*',
                'client/production.min.js'
            ],
            tasks: ['build:local:debug'],
            options: {
                livereload: {
                    port: 1337
                }
            }
        }
    }
};
