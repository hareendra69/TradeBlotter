'use strict';

module.exports = function() {
    var cwd = '',
        srcFiles = ['client/modules/**/*.html'];

    return {
        options: {
            module: 'TradeBlotter'
        },
        debug: {
            options: {
                htmlmin: {
                    collapseBooleanAttributes: false,
                    collapseWhitespace: false,
                    removeAttributeQuotes: false,
                    removeComments: false,
                    removeEmptyAttributes: false,
                    removeRedundantAttributes: false,
                    removeScriptTypeAttributes: false,
                    removeStyleLinkTypeAttributes: false
                }
            },
            cwd: cwd,
            src: srcFiles,
            dest: 'client/views/tradeblotter.views.min.js'
        },
        build: {
            options: {
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                }
            },
            cwd: cwd,
            src: srcFiles,
            dest: 'client/views/tradeblotter.views.min.js'
        }
    }
};
