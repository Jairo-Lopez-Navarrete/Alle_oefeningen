// program for a simple calculator

// take the operator input

// take the operand input
const nummer1 = parseFloat(prompt('nummer1'));

const operator = prompt('+ of - of * of /');

const nummer2 = parseFloat(prompt('nummer2'));

let uitkomst;

// using if...else if... else
if (operator == '+') {
    uitkomst = nummer1 + nummer2;
}
else if (operator == '-') {
    uitkomst = nummer1 - nummer2;
}
else if (operator == '*') {
    uitkomst = nummer1 * nummer2;
}
else {
    uitkomst = nummer1 / nummer2;
}

// display the result
alert (`${nummer1} ${operator} ${nummer2} = ${uitkomst}`);