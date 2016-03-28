'use strict';

module.exports = function() {
    return {
        src: [
            'gruntfile.js',
            'gruntConfig/*.js',
            'client/*.js',
            'client/modules/*.js',
            'server/controller/*.js',
            'server/routes/*.js',
            'client/test/e2e/*.js'
        ],
        options: {
            'indent_size': 4,
            'indent_char': ' ',
            'indent_level': 0,
            'indent_with_tabs': false,
            'preserve_newlines': true,
            'max_preserve_newlines': 10,
            'jslint_happy': false,
            'brace_style': 'collapse',
            'keep_array_indentation': false,
            'keep_function_indentation': false,
            'space_before_conditional': true,
            'eval_code': false,
            'indent_case': false,
            'unescape_strings': false
        }
    }
};
