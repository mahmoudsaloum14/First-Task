// Checks for 1.1. They read window.consoleHistory, a list of every
// console.log call. Each call is an array of the values passed in.
checks(function () {
  const calls = consoleHistory;
  const values = calls.flat();

  check('TODO 1: logged "Hello, JavaScript!"', () => values.includes("Hello, JavaScript!"));
  check("TODO 2: logged your name (a string that isn't one of the other answers)", () =>
    values.some((v) => typeof v === "string" && v.trim() !== "" &&
      !["I am running!", "Hello, JavaScript!", "string", "number", "boolean", "undefined", "Age:", "careful", "oops"].includes(v) &&
      calls.find((c) => c.includes(v)).length === 1)
  );
  check("TODO 3: logged the number 7 (not the string \"7\")", () => values.includes(7));
  check("TODO 4: logged 168, the hours in a week", () => values.includes(168));
  check('TODO 5: logged typeof "hello" → "string"', () => values.includes("string"));
  check('TODO 5: logged typeof 42 → "number"', () => values.includes("number"));
  check("TODO 6: one console.log with two or more values", () => calls.some((c) => c.length >= 2));
  check('Bonus: logged typeof true → "boolean"', () => values.includes("boolean"));
});
