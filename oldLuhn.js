export default function(some_number) {
  let numbers = [];
  let multipliers = [];
  let multiplied = [];
  let cloneMultiplied = [];
  let added = 0;
  let sum = 0;

  some_number = some_number.toString();
  for (let number of some_number) {
    numbers.push(number);
  }

  for (let number of numbers) {
    // parseInt(number);
    if (numbers.indexOf(number) % 2 == 0)
      multipliers.push(2);
    else
      multipliers.push(1);
  }

  for (let number = 0; number <= numbers.length; number++)
    multiplied.push(numbers[number] * multipliers[number]);

  for (let number of multiplied) {
    if (number > 9) {
      number = number.toString();
      added = parseInt(number[0]) + parseInt(number[1]);
      cloneMultiplied.push(added);
    }
    else
      cloneMultiplied.push(number);
  }

  for (let number of cloneMultiplied)
    if (number != null) {
      sum += number;
      console.log(sum);
    }

    return sum; // null?
