// =============================================================
// Level 3 · Task 1 — Arrays
// =============================================================

const fruits = ["apple", "banana", "cherry"];
console.log("fruits:", fruits);

// Do TODO 1 and 2 BEFORE TODO 3, because TODO 3 changes the list.

// TODO 1: const firstFruit = the item at position 0
const firstFruit = fruits[0];

// TODO 2: const lastFruit = the last item
//         Don't write fruits[2]. Use fruits.length - 1 so it works for any size.
const lastFruit = fruits[fruits.length - 1];

// TODO 3: add "mango" to the end of fruits with .push()
fruits.push("mango");

// TODO 4: return the biggest number in the array, using a loop
//         Hint: let biggest = numbers[0];  (why not 0?)
//         then for (const n of numbers) { if n is bigger, replace biggest }
function largest(numbers) {
let biggest = numbers[0];

  for (const n of numbers) {
    if (n > biggest) {
      biggest = n;
    }
  }

  return biggest;
}


// TODO 5: return true if item is in the list, otherwise false, using a loop
//         Hint: you can return true as soon as you find it.
//         Only return false AFTER the loop has checked everything.
function contains(list, item) {
for (const element of list) {
    if (element === item) {
      return true;
    }
  }

  return false;
}


// TODO 6: return a NEW array in reverse order. Don't change the original.
//         Hint: const result = []; loop from the last index DOWN to 0; push each item
function reverseCopy(list) {
const result = [];

  for (let i = list.length - 1; i >= 0; i--) {
    result.push(list[i]);
  }

  return result;
}


console.log("largest([3, 9, 2]) =", largest([3, 9, 2]));
console.log("firstFruit:", firstFruit);
console.log("lastFruit:", lastFruit);
console.log("fruits:", fruits);
console.log("largest([3, 9, 2]) =", largest([3, 9, 2]));
console.log("contains([1, 2, 3], 2) =", contains([1, 2, 3], 2));
console.log("contains([1, 2, 3], 5) =", contains([1, 2, 3], 5));
console.log("reverseCopy:", reverseCopy(["apple", "banana", "cherry"]));