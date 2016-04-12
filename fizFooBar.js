"use strict";

function fizFooBar(number, array) {
    let output = '';
    for (let pair of array)
        if (number % pair[0] == 0)
            output += pair[1];
    return output;
}