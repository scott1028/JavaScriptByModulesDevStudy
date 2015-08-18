'use strict';

// ref: http://requirejs.org/docs/api.html#define
console.log('Hello World at utils/toolkits.js!');


//
define(function() {
    // Do setup work here

    console.log('Start run toolkit\'s constructor!');

    return {
        color: "black",
        size: "unisize"
    }
});
