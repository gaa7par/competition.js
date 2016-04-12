"use strict";

function fizFooBar(number, array) {
    let pattern = {};
    let output = '';
    
    for (let pair of array)
        pattern[pair[1]] = pair[0];

    for (let pair in pattern)
        if (number % pattern[pair] == 0)
            output += pair;
    
    return output;
}

// test

const number = 30;
const array = [[2, "Two"], [3, "Three"], [5, "Five"]];
console.log(fizFooBar(number, array));
