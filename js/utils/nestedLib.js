'use strict';

// ref: http://requirejs.org/docs/api.html#define
console.log('Hello World at utils/nestedLib.js!');


//
define(function(toolkit){


    //
    console.log(toolkit);


    return {
       name: 'This is nestedLib.js'
    }
});
