checks(function () {
  check("TODO 1: sumTo(3) → 6", () => sumTo(3), 6);
  check("TODO 1: sumTo(100) → 5050", () => sumTo(100), 5050);
  check('TODO 2: countdown(3) → "3 2 1 Liftoff!"', () => countdown(3), "3 2 1 Liftoff!");
  check('TODO 2: countdown(1) → "1 Liftoff!"', () => countdown(1), "1 Liftoff!");
  check('TODO 3: fizzBuzz(9) → "Fizz"', () => fizzBuzz(9), "Fizz");
  check('TODO 3: fizzBuzz(10) → "Buzz"', () => fizzBuzz(10), "Buzz");
  check('TODO 3: fizzBuzz(15) → "FizzBuzz"', () => fizzBuzz(15), "FizzBuzz");
  check('TODO 3: fizzBuzz(7) → "7" (a string)', () => fizzBuzz(7), "7");
  check("TODO 3b: logged FizzBuzz for 1 to 15", () => {
    const logged = consoleHistory.map((c) => c[0]);
    return logged.includes("FizzBuzz") && logged.includes("14");
  });
  check('TODO 4: countVowels("javascript") → 3', () => countVowels("javascript"), 3);
  check('TODO 4: countVowels("AEIOU") → 5', () => countVowels("AEIOU"), 5);
  check("TODO 5: doublingsUntil(100) → 7", () => doublingsUntil(100), 7);
  check("TODO 5: doublingsUntil(1) → 0", () => doublingsUntil(1), 0);
  check("Bonus: multiplicationTable exists", () => typeof multiplicationTable, "function");
});
