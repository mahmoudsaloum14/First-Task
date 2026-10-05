// =============================================================
// Level 3 · Task 1 — Arrays  (SOLUTION)
// =============================================================

const fruits = ["apple", "banana", "cherry"];
console.log("fruits:", fruits);

// TODO 1
const firstFruit = fruits[0]; // "apple"

// TODO 2: length is 3, the positions are 0, 1, 2, so the last is length - 1.
const lastFruit = fruits[fruits.length - 1]; // "cherry"

// TODO 3: push changes the array itself. That's allowed on a const:
// the variable still points to the same array.
fruits.push("mango");
console.log("after push:", fruits);

// TODO 4: start with the FIRST item, not 0. With [-5, -2, -9], starting
// at 0 would wrongly return 0, a number that isn't even in the list.
function largest(numbers) {
  let biggest = numbers[0];
  for (const n of numbers) {
    if (n > biggest) {
      biggest = n;
    }
  }
  return biggest;
}

// TODO 5: return early when found. false only comes after checking every item.
function contains(list, item) {
  for (const x of list) {
    if (x === item) return true;
  }
  return false;
}

// TODO 6: build a new array, so the original stays untouched.
function reverseCopy(list) {
  const result = [];
  for (let i = list.length - 1; i >= 0; i--) {
    result.push(list[i]);
  }
  return result;
}

console.log("largest([3, 9, 2]) =", largest([3, 9, 2]));

// BONUS: the built-in versions.
console.log(fruits.includes("banana"));   // true
console.log(Math.max(...[3, 9, 2]));      // 9  (... spreads the array into separate arguments)
