// =============================================================
// Level 2 · Task 3 — Loops
// =============================================================

// TODO 1: add up 1 + 2 + ... + n
//         Hint: let total = 0; loop i from 1 to n; total += i; return total
function sumTo(n) {
 let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}


// TODO 2: countdown(3) → "3 2 1 Liftoff!"
//         Hint: start with let text = ""; loop i DOWN from n to 1 (i--);
//         add i and a space each time, then add "Liftoff!" at the end.
function countdown(n) {
let text = "";

  for (let i = n; i >= 1; i--) {
    text += i + " ";
  }

  text += "Liftoff!";

  return text;
}


// TODO 3a: one number → "FizzBuzz" / "Fizz" / "Buzz" / or the number as text
//          "divides by 3" means n % 3 === 0
//          Which check has to come FIRST?
function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return String(n);
  }
}

// TODO 3b: write a loop that logs fizzBuzz(i) for i from 1 to 15
for (let i = 1; i <= 15; i++) {
  console.log(fizzBuzz(i));
}

// TODO 4: count the vowels in a word, capitals included
//         Hint: for (const letter of word) { ... }
//         "aeiou".includes(letter.toLowerCase()) tells you if it's a vowel
function countVowels(word) {
 let count = 0;

  for (const letter of word) {
    if ("aeiou".includes(letter.toLowerCase())) {
      count++;
    }
  }

  return count;
}


// TODO 5: start at 1 and keep doubling (1, 2, 4, 8…) until you reach the
//         limit or go past it. Return how many doublings that took.
//         doublingsUntil(100) → 7   (1→2→4→8→16→32→64→128)
//         A while loop fits: you don't know in advance how many rounds.
function doublingsUntil(limit) {
  let number = 1;
  let doublings = 0;

  while (number < limit) {
    number = number * 2;
    doublings++;
  }

  return doublings;
}
