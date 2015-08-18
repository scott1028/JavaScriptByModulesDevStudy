'use strict';

// ref: http://requirejs.org/docs/api.html#define
console.log('Hello World at utils/nested.js!');


//
define(["utils/nestedLib"], function(nestedLib){


    //
    console.log(nestedLib);


    return {
       name: 'This is nested.js'
    }
});
