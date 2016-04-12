"use strict";

/*let name = "Kacper";
console.log(`Hello, ${name}!`);

let numbers = [];

for (let i = 1; i <= 10; i++) {
    numbers.push(i);
}

for (let number of numbers) {
    console.log(number);
}

function toArabic(number) {
    let array = number.split('');
    let lenny = array.length;
    return lenny;
}
console.log(toArabic("MMXVI"));

let string = "There's no eggs on the other hand";
console.log(string.includes("eggs"));

let newString = string.replace("eggs", "hedge");
console.log(newString);

let string = "blue_is_the_warmest_color";IV
let newString = string.toUpperCase();
console.log(newString);
*/

let array = [[1, 'A'], [2, 'B'], [3, 'C'], [4, 'D']];

for (let pair of array)
    for (let seed of pair)
        console.log(seed);

console.log(array.length);
