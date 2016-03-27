'use strict';

module.exports = function() {
    return {
        dev: {
            script: 'server.js',
            options: {
                args: [],
                ignore: ['test', 'node_modules', 'gruntConfig'],
                ext: 'js',
                nodeArgs: ['--debug'],
                delayTime: 1,
                env: {
                    PORT: 3000,
                    NODE_ENV: 'dev',
                    appConfig: {
                        name: 'Trade Blotter'
                    }
                },
                cwd: __dirname + '/..'
            }
        },
        production: {
            script: 'server.js',
            options: {
                args: [],
                ignore: ['test', 'node_modules', 'gruntConfig'],
                ext: 'js',
                delayTime: 1,
                env: {
                    PORT: 3000,
                    NODE_ENV: 'production',
                    appConfig: {
                        name: 'Trade Blotter'
                    }
                },
                cwd: __dirname + '/..'
            }
        }
    }
};
