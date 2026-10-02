// =============================================================
// Level 1 · Task 3 — Operators & type surprises
// =============================================================

const price = 25;
const quantity = 3;

// ---------- Part A: maths ----------

// TODO 1: const total = price times quantity
const total = price * quantity;

// TODO 2: const withTax = total plus 15% of total
//         (15% of something = something * 0.15)
const withTax = total + (total * 0.15)

// TODO 3: const isExpensive = is withTax greater than 80?
//         Use >. The result is true or false, not a number.
const isExpensive = withTax > 80;
console.log(isExpensive)

// TODO 4: const leftover = the remainder of 17 divided by 5
//         % gives the remainder: 10 % 3 → 1
const leftover = 17 % 5
console.log(leftover)

// Log your answers so you can see them:
// console.log(total, withTax, isExpensive, leftover);
console.log(total, withTax, isExpensive, leftover);

// ---------- Part B: type surprises ----------

// Pretend this came from a form input. Inputs always give you STRINGS.
const fromInput = "5";

// TODO 5: const wrongSum = fromInput + 3   → then log it. Is it what you expected?
 const wrongSum = fromInput + 3 
 //the output is 53 because the type of 5 is a string 

// TODO 6: const rightSum = Number(fromInput) + 3   → log it
const rightSum = Number(fromInput) + 3;
console.log(rightSum);
//here we have converted the type of from input into a number so it can be added with 3 

// TODO 7: const looseEqual  = fromInput == 5
//         const strictEqual = fromInput === 5
//         Log both. Why are they different?
const looseEqual = fromInput == 5;
const strictEqual = fromInput === 5;

console.log(looseEqual);
console.log(strictEqual);
// === for type and value
 // == only for value