'use strict';

module.exports = function() {
    return {
        all: {
            src: [
                'gruntfile.js',
                'client/*.js',
                'modules/*.js',
                'modules/**/*.js',
                'client/test/e2e/*.js'
            ],
            options: {
                jshintrc: true
            }
        }
    }
};
