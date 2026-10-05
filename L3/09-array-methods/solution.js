// =============================================================
// Level 3 · Task 3 — Array methods  (SOLUTION)
// =============================================================

const products = [
  { name: "Notebook",      price: 4,  category: "stationery",  inStock: true  },
  { name: "Backpack",      price: 35, category: "bags",        inStock: true  },
  { name: "Pen set",       price: 8,  category: "stationery",  inStock: false },
  { name: "Water bottle",  price: 12, category: "accessories", inStock: true  },
  { name: "Laptop sleeve", price: 25, category: "bags",        inStock: false },
];

// TODO 1: forEach RETURNS nothing. Use it only for side effects like logging.
products.forEach((product) => console.log(`${product.name}: $${product.price}`));

// TODO 2: map → a new array, same length, each item turned into something else.
const names = products.map((product) => product.name);

// TODO 3: filter → a new array holding the items where the function returned true.
// product.inStock is already true/false, so there's no need for === true.
const available = products.filter((product) => product.inStock);

// TODO 4: chaining. filter gives back an array, so we can call .map on it.
const cheapNames = products
  .filter((product) => product.price < 10)
  .map((product) => product.name); // ["Notebook", "Pen set"]

// TODO 5: find → the FIRST matching item itself (not an array), or undefined.
const backpack = products.find((product) => product.name === "Backpack");

// TODO 6: reduce → boils the whole array down to one value.
// Round 1: sum=0 → 4, round 2: 4 → 39, … the final result is 84.
const total = products.reduce((sum, product) => sum + product.price, 0);

// TODO 7: the same, but filter out the unavailable products first. 4 + 35 + 12 = 51
const stockValue = products
  .filter((product) => product.inStock)
  .reduce((sum, product) => sum + product.price, 0);

console.log({ names, cheapNames, total, stockValue });

// BONUS: [...products] makes a shallow copy, so sort doesn't reorder the original.
// (a, b) => a.price - b.price: a negative result means a comes first.
const sortedNames = [...products]
  .sort((a, b) => a.price - b.price)
  .map((product) => product.name);
