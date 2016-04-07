"use strict";

function toArabic(string) {
    let numbers = string.split('');
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
                console.log("You're fucked!");
                break;
        }
    }
    return arabic;
}

console.log(toArabic("IV"));