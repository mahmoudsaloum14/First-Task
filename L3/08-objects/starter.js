// =============================================================
// Level 3 · Task 2 — Objects
// =============================================================

const student = {
  name: "Sara",
  age: 20,
  courses: ["HTML", "CSS"], // a value can be an array…
};
console.log("student:", student);


// TODO 1: const studentName = read the name with DOT notation
const studentName = student.name;

// TODO 2: read the age with BRACKET notation, using this variable:
const key = "age";
//         const studentAge = student[ ... ]
const studentAge = student[key];

// TODO 3: add a new property: student.email = "sara@example.com"
student.email = "sara@erasmus.org";

// TODO 4: add "JavaScript" to the student's courses array
//         (student.courses is an array, so which method adds to an array?)
student.courses.push("JavaScript");

// TODO 5: return "Sara is 20 and takes 3 courses."
//         Use person.name, person.age and person.courses.length.
//         Use `person`, not `student`, so it works for ANY object passed in.
function describe(person) {
return `${person.name} is ${person.age} and takes ${person.courses.length} courses.`;
}


// TODO 6: const book = { title: ..., author: ..., pages: ..., isRead: ... }
const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 310,
  isRead: true
};

// TODO 7: return the number of properties in obj
//         Object.keys(obj) gives you an ARRAY of the property names…
function countKeys(obj) {
return Object.keys(obj).length;
}


console.log(describe(student));
console.log("studentName:", studentName);
console.log("studentAge:", studentAge);
console.log("book:", book);
console.log("book properties:", countKeys(book));