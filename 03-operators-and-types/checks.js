checks(function () {
  check("TODO 1: total is 75", () => total, 75);
  check("TODO 2: withTax is 86.25", () => withTax, 86.25);
  check("TODO 3: isExpensive is the boolean true", () => isExpensive, true);
  check("TODO 4: leftover is 2", () => leftover, 2);
  check('TODO 5: wrongSum is the string "53"', () => wrongSum, "53");
  check("TODO 6: rightSum is the number 8", () => rightSum, 8);
  check("TODO 7: looseEqual is true", () => looseEqual, true);
  check("TODO 7: strictEqual is false", () => strictEqual, false);
  check("Bonus: logged 0.1 + 0.2", () => consoleHistory.flat().includes(0.1 + 0.2));
});
