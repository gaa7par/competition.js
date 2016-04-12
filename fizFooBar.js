"use strict";

function fizFooBar(number, pattern) {
    let dividers = [];
    let words = [];

    for (let pair of pattern) {
        dividers.push(pair[0]);
        words.push(pair[1]);
    }
    
    return { dividers, words };
}

// test

const number = 20;
const pattern = [[2, "Two"], [3, "Three"], [5, "Five"]];
console.log(fizFooBar(number, pattern));
