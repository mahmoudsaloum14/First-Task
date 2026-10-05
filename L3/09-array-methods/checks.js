checks(function () {
  check('TODO 1: logged "Notebook: $4"', () => consoleHistory.some((c) => c.join(" ").includes("Notebook: $4")));
  check("TODO 2: names", () => names, ["Notebook", "Backpack", "Pen set", "Water bottle", "Laptop sleeve"]);
  check("TODO 3: available has the 3 in-stock products", () => available.map((p) => p.name), ["Notebook", "Backpack", "Water bottle"]);
  check('TODO 4: cheapNames → ["Notebook", "Pen set"]', () => cheapNames, ["Notebook", "Pen set"]);
  check("TODO 5: backpack is the Backpack object (price 35)", () => backpack && backpack.price, 35);
  check("TODO 6: total → 84", () => total, 84);
  check("TODO 7: stockValue → 51", () => stockValue, 51);
  check("The original products array still has 5 items", () => products.length, 5);
  check("Bonus: sortedNames, cheapest first", () => sortedNames, ["Notebook", "Pen set", "Water bottle", "Laptop sleeve", "Backpack"]);
});
