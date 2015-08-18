'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.initConfig({
        wiredep: {

            task: {
                src: [
                    '*.html', // .html support...
                ],
            }
        }
    });
};
