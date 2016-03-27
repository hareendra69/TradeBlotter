'use strict';

module.exports = function() {
    var srcFiles = [
        'modules/module.js',
        'client/config.js',
        'client/modules/**/*.js',
        'client/views/tradeblotter.views.min.js'
    ];

    return {
        debug: {
            options: {
                beautify: {
                    width: 80,
                    beautify: true
                },
                mangle: false
            },
            src: srcFiles,
            dest: 'client/production.min.js'
        },
        production: {
            options: {
                mangle: false
            },
            src: srcFiles,
            dest: 'client/production.min.js'
        },
        build: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            src: srcFiles,
            dest: 'client/production.min.js'
        }
    }
};
