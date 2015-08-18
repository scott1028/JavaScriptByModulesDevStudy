'use strict';

console.log('Hello World at main.js!');


require(["utils/toolkit", "utils/others", "utils/nested"], function(util, others, nested) {
    // This function is called when scripts/helper/util.js is loaded.
    // If util.js calls define(), then this function is not fired until
    // util's dependencies have loaded, and the util argument will hold
    // the module value for "helper/util".


    //
    console.log(util, others, nested);
});


//
require(["utils/toolkit"], function (toolkit) {


    //
    console.log(toolkit);
});


//
console.log('TestFunc[require == requirejs]:', require == requirejs);
