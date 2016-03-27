'use strict';

module.exports = function() {

    return {
        target: {
            files: [{
                expand: true,
                cwd: 'client/css',
                src: ['tradeBlotter.css'],
                dest: 'client/css',
                ext: '.min.css'
            }]
        }
    }
};
