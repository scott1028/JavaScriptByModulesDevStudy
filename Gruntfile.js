'use strict';

module.exports = function(grunt) {
    

    //
    var staticFileMiddleware = function(req, res, next) {
        var finalhandler = require('finalhandler');  // if you no use this plugin, when client get nonexisted file, connect server will shutdown.
        var serveStatic = require('serve-static');
        var serve = serveStatic('./');
        var done = finalhandler(req, res);
        serve(req, res, done);
    };


    //
    var allMiddlewares = function(connect, options) {
        var optBase = (typeof options.base === 'string') ? [options.base] : options.base;
        return [
            require('connect-modrewrite')(require('./.htaccess.js').rewrite),   // rewriteRule support
            staticFileMiddleware    // staticFile serve
        ]
    }


    //
    grunt.loadNpmTasks('grunt-wiredep');


    //
    grunt.initConfig({
        wiredep: {
            task: {
                src: [
                    '*.html', // .html support...
                ],
            }
        },
        connect: {
            options: {
                // base: '.',
                port: 9000,
                hostname: 'localhost',
                keepalive: true,    // 維持伺服器開啟
                debug: true
            },
            development: {
                options: {
                    middleware: allMiddlewares
                }
            }
        }
    });


    //
    grunt.loadNpmTasks('grunt-contrib-connect');


    //
    grunt.registerTask('lift', function (target) {
        grunt.task.run([
            'connect:development'
        ]);
    });
};
