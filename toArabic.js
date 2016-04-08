"use strict";

function toArabic(word) {
    let letters = word.toUpperCase();
    
    
    if (letters.includes("CM"))
        letters = letters.replace("CM", "DCCCC");
    if (letters.includes("CD"))
        letters = letters.replace("CD", "CCCC");
    if (letters.includes("XC"))
        letters = letters.replace("XC", "LXXXX");
    if (letters.includes("XL"))
        letters = letters.replace("XL", "XXXX");
    if (letters.includes("IX"))
        letters = letters.replace("IX", "VIIII");
    if (letters.includes("IV"))
        letters = letters.replace("IV", "IIII");
    
    
    let numbers = letters.split('');
    let arabic = 0;
    
    
    for (let number of numbers) {
        switch (number) {
            case 'M':
                arabic += 1000;
                break;
            case 'D':
                arabic += 500;
                break;
            case 'C':
                arabic += 100;
                break;
            case 'L':
                arabic += 50;
                break;
            case 'X':
                arabic += 10;
                break;
            case 'V':
                arabic += 5;
                break;
            case 'I':
                arabic += 1;
                break;
            default:
                throw "Invalid number";
                break;
        }
    }
    return arabic;
}
