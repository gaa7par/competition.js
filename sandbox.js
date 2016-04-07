"use strict";

let name = "Kacper";
console.log(`Hello, ${name}!`);

let numbers = [];

for (let i = 1; i <= 10; i++) {
    numbers.push(i);
}

for (let number of numbers) {
    console.log(number);
}


function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
        while ( num >= lookup[i] ) {
            roman += i;
            num -= lookup[i];
        }
    }
    return roman;
}

console.log(romanize(2016));