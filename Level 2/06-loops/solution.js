// =============================================================
// Level 2 · Task 3 — Loops  (SOLUTION)
// =============================================================

// TODO 1: the accumulator pattern.
function sumTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i; // same as total = total + i
  }
  return total;
}

// TODO 2: the same pattern with a string, counting DOWN.
function countdown(n) {
  let text = "";
  for (let i = n; i >= 1; i--) {
    text += i + " "; // number + string → string
  }
  return text + "Liftoff!";
}

// TODO 3a: check "both" FIRST. 15 also divides by 3, so if the Fizz check
// came first, 15 would stop there and never reach FizzBuzz.
function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return String(n);
}

// TODO 3b
for (let i = 1; i <= 15; i++) {
  console.log(fizzBuzz(i));
}

// TODO 4: for...of hands you each item (here, each letter) in turn.
// No counter needed.
function countVowels(word) {
  let count = 0;
  for (const letter of word) {
    if ("aeiou".includes(letter.toLowerCase())) {
      count++;
    }
  }
  return count;
}

// TODO 5: while repeats as long as the condition is true. Something inside
// the loop MUST change so the condition turns false eventually.
function doublingsUntil(limit) {
  let value = 1;
  let steps = 0;
  while (value < limit) {
    value *= 2;
    steps++;
  }
  return steps;
}

// BONUS
function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
