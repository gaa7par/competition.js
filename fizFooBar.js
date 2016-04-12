"use strict";

function fizFooBar(number, array) {
    let pattern = {};
    
    for (let pair of array) {
        pattern[pair[0]] = pair[1];
    }
    console.log(pattern);
}

// test

const number = 20;
const array = [[2, "Two"], [3, "Three"], [5, "Five"]];
console.log(fizFooBar(number, array));
