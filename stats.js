"use strict";

export default function(number, max_power) {
    let array = [];
    let result = 0;
    let zero = 0, one = 0, two = 0, three = 0, four = 0, five = 0, six = 0;
    let seven = 0, eight = 0, nine = 0;

    for (let power = 1; power <= max_power; power++) {
      result = Math.pow(number, power);
      if (result > 9) {
        result = result.toString();
        array.push(result[result.length - 1]);
      }
      else
        array.push(result);
    }

    for (let num of array) {
      if (num == 0)
        zero += 1;
      else if (num == 1)
        one += 1;
      else if (num == 2)
        two += 1;
      else if (num == 3)
        three += 1;
      else if (num == 4)
        four += 1;
      else if (num == 5)
        five += 1;
      else if (num == 6)
        six += 1;
      else if (num == 7)
        seven += 1;
      else if (num == 8)
        eight += 1;
      else if (num == 9)
        nine += 1;
    }

    let hash = {
      '0': zero,
      '1': one,
      '2': two,
      '3': three,
      '4': four,
      '5': five,
      '6': six,
      '7': seven,
      '8': eight,
      '9': nine
    }

    return hash;
}
