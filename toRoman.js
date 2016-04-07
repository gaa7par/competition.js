"use strict";

function toRoman(number) {
    let pattern = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    let roman = '';

    for (let char in pattern) {
        while (number >= pattern[char]) {
            roman += char;
            number -= pattern[char];
        }
    }
    return roman;
}