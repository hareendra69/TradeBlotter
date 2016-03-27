'use strict';

module.exports = function() {
    return {
        options: {
            test: true,
            concise: true,
            'log-level': 'error',
            'fail-fast': true,
            engine: 'phantomjs',
            parallel: true,
            concurrency: 1,
            'ssl-protocol': 'any',
            'ignore-ssl-errors': 'yes',
            verbose: false,
            baseUrl: "http://localhost:8081"
        },
        local: {
            options: {
                'log-level': 'debug'
            },
            files: {
                'client/test/results/e2e/casper-results.xml': ['client/test/e2e/*.js']
            }
        }
    }
};
