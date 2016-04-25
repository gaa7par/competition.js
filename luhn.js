"use strict";

export default function(some_numbers) {
	let sum = 0;
	let bool = false;

	for (let number = 0; number <= some_numbers.length - 1; number++) {
		let num = some_numbers[number];

		if(bool) {
			num *= 2;
			if (num > 9)
				num -= 9;
		}

		sum += num;
		bool = !bool;
	}

	return sum % 10 === 0;
}
