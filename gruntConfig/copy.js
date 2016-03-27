'use strict';

module.exports = function() {
    return {
        all: {
            expand: true,
            src: [
                'client/bower_components/**/*',
                'client/modules/**/*',
                'client/css/**/*',
                'client/json/**/*',
                'client/fonts/**/*',
                'client/images/*.*',
                'client/views/*.*',
                'client/__status',
                'client/*.*',
                'server.js',
                'config.js'
            ],
            dest: 'dist'
        }
    }
};
