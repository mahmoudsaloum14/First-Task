// =============================================================
// Level 3 · Task 3 — Array methods
// =============================================================
// Each method takes a FUNCTION and calls it once for every item.
// That function is usually a short arrow function: product => ...

const products = [
  { name: "Notebook",      price: 4,  category: "stationery",  inStock: true  },
  { name: "Backpack",      price: 35, category: "bags",        inStock: true  },
  { name: "Pen set",       price: 8,  category: "stationery",  inStock: false },
  { name: "Water bottle",  price: 12, category: "accessories", inStock: true  },
  { name: "Laptop sleeve", price: 25, category: "bags",        inStock: false },
];


// TODO 1: log each product as "Notebook: $4"
//         products.forEach(product => console.log(...))
products.forEach(product => console.log(`${product.name}: $${product.price}`));

// TODO 2: const names = products.map(product => ...)
//         → ["Notebook", "Backpack", ...]
const names = products.map(product => product.name);

// TODO 3: const available = products.filter(product => ...)
//         Keep a product when the function returns true.
const available = products.filter(product => product.inStock === true);

// TODO 4: const cheapNames = names of products with price under 10
//         products.filter(...).map(...)
const cheapNames = products
  .filter(product => product.price < 10)
  .map(product => product.name);


// TODO 5: const backpack = products.find(product => ...)
const backpack = products.find(product => product.name === "Backpack");


// TODO 6: const total = products.reduce((sum, product) => ..., 0)
//         sum starts at 0 (the second argument). Return the new sum each time.
const total = products.reduce((sum, product) => sum + product.price, 0);

// TODO 7: const stockValue = the total price of in-stock products only
//         Hint: filter first, then reduce.
const stockValue = products
  .filter(product => product.inStock === true)
  .reduce((sum, product) => sum + product.price, 0);


console.log("names:", names);
console.log("available:", available);
console.log("cheapNames:", cheapNames);
console.log("backpack:", backpack);
console.log("total:", total);
console.log("stockValue:", stockValue);