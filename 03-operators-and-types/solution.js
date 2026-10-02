// =============================================================
// Level 1 · Task 3 — Operators & type surprises  (SOLUTION)
// =============================================================

const price = 25;
const quantity = 3;

// TODO 1
const total = price * quantity; // 75

// TODO 2: * runs before +, like in school maths.
// Same as: total * 1.15
const withTax = total + total * 0.15; // 86.25

// TODO 3: comparisons give back a boolean.
const isExpensive = withTax > 80; // true

// TODO 4: 17 = 5 * 3 + 2, so the remainder is 2.
// % is handy for "is this even?" (n % 2 === 0) and "every 3rd item".
const leftover = 17 % 5; // 2

console.log(total, withTax, isExpensive, leftover);

const fromInput = "5";

// TODO 5: a string on either side of + means "join", so "5" + 3 → "53"
const wrongSum = fromInput + 3;
console.log(wrongSum); // "53"

// TODO 6: Number() turns text into a real number.
const rightSum = Number(fromInput) + 3;
console.log(rightSum); // 8

// TODO 7: == quietly converts "5" to 5 before comparing, so it's true.
// === checks the TYPE too: string vs number, so it's false.
// Use === unless you have a very good reason.
const looseEqual = fromInput == 5;
const strictEqual = fromInput === 5;
console.log(looseEqual, strictEqual); // true false

// BONUS
console.log(0.1 + 0.2); // 0.30000000000000004
