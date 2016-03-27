'use strict';

module.exports = function() {
    return {
        options: {
            addRootSlash: false,
            ignorePath: 'client/',
            transform: function(filepath, index, length) {
                if (filepath.indexOf("bower_components/") == -1) {
                    filepath += '?' + new Date().getTime();
                }

                if (filepath.indexOf(".css") == -1) {
                    return '<script src="' + filepath + '"></script>';
                } else {
                    return '<link rel="stylesheet" href="' + filepath + '"/>';
                }


            }
        },
        build: {
            files: {
                'client/index.html': [
                    'client/bower_components/lodash/lodash.min.js',
                    'client/bower_components/angular/angular.js',
                    'client/bower_components/angular-ui-router/release/angular-ui-router.js',
                    'client/bower_components/angular-bootstrap/ui-bootstrap.js',
                    'client/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
                    'client/bower_components/angular-toggle-switch/angular-toggle-switch.min.js',
                    'client/bower_components/chosen/chosen.jquery.js',
                    'client/bower_components/angular-chosen-localytics/chosen.js',
                    'client/bower_components/jQuery.print/jQuery.print.js',
                    'client/production.min.js',
                    'client/css/tradeBlotter.min.css'
                ]
            }
        }
    }
};
