const num1 = 12;
const num2 = 8;

let result;

if (num1 > num2) {
  result = num1 * 2;
} else {
  result = num1 + num2;
}

console.log(result);

// Ternary version
const num3 = 12;
const num4 = 8;

const result1 = num1 > num2 ? num1 * 2 : num1 + num2;

console.log(result);
