checks(function () {
  check('TODO 1: firstFruit → "apple"', () => firstFruit, "apple");
  check('TODO 2: lastFruit → "cherry"', () => lastFruit, "cherry");
  check("TODO 3: fruits now has 4 items", () => fruits.length, 4);
  check('TODO 3: the last fruit is now "mango"', () => fruits[fruits.length - 1], "mango");
  check("TODO 4: largest([3, 9, 2]) → 9", () => largest([3, 9, 2]), 9);
  check("TODO 4: largest([-5, -2, -9]) → -2 (all negative!)", () => largest([-5, -2, -9]), -2);
  check('TODO 5: contains(["a", "b"], "b") → true', () => contains(["a", "b"], "b"), true);
  check('TODO 5: contains(["a", "b"], "z") → false', () => contains(["a", "b"], "z"), false);
  check("TODO 6: reverseCopy([1, 2, 3]) → [3, 2, 1]", () => reverseCopy([1, 2, 3]), [3, 2, 1]);
  check("TODO 6: the original array is unchanged", () => {
    const original = [1, 2, 3];
    reverseCopy(original);
    return original.join() === "1,2,3";
  });
});
