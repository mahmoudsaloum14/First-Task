// =============================================================
// Level 5 — Mini project: a todo app  (SOLUTION)
// =============================================================

// BONUS (saving): load saved todos if there are any. JSON.parse turns the
// saved text back into an array. The try/catch handles private windows and
// broken data.
function loadTodos() {
  try {
    const saved = JSON.parse(localStorage.getItem("todos"));
    if (Array.isArray(saved)) return saved;
  } catch { /* fall through to the defaults */ }
  return [
    { id: 1, text: "Finish the JS tasks", done: false },
    { id: 2, text: "Open DevTools", done: true },
  ];
}

let todos = loadTodos();
// Carry on numbering after the biggest saved id, so ids never repeat.
let nextId = Math.max(0, ...todos.map((t) => t.id)) + 1;

const form = document.querySelector("#add-form");
const input = document.querySelector("#new-todo");
const list = document.querySelector("#list");
const remainingEl = document.querySelector("#remaining");
const clearBtn = document.querySelector("#clear-done");

function render() {
  list.innerHTML = "";

  for (const todo of todos) {
    const li = document.createElement("li");
    li.dataset.id = todo.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // textContent, NOT innerHTML: todo.text was typed by a user, so
    // innerHTML would let them inject HTML into the page.
    const span = document.createElement("span");
    span.textContent = todo.text;

    const del = document.createElement("button");
    del.className = "delete";
    del.textContent = "✕";
    del.setAttribute("aria-label", `Delete "${todo.text}"`);

    // TODO 2: the page follows the data.
    checkbox.checked = todo.done;
    li.classList.toggle("done", todo.done);

    li.append(checkbox, span, del);
    list.append(li);
  }

  // TODO 3 (+ BONUS: "item" vs "items")
  const left = todos.filter((t) => !t.done).length;
  remainingEl.textContent = `${left} left`;
  remainingEl.title = `${left} ${left === 1 ? "item" : "items"} left`;

  // BONUS: save after every render, so every change is kept automatically.
  try { localStorage.setItem("todos", JSON.stringify(todos)); } catch { /* storage blocked */ }
}

// TODO 4
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text === "") return; // guard clause: ignore empty or spaces-only input

  todos.push({ id: nextId, text, done: false }); // { text } is short for { text: text }
  nextId++;
  input.value = "";
  input.focus(); // ready to type the next one
  render();
});

// TODO 5: event delegation. The list element never changes, so one listener
// here covers every <li>, including ones added later.
list.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;
  const id = Number(li.dataset.id);

  if (event.target.type === "checkbox") {
    const todo = todos.find((t) => t.id === id);
    todo.done = !todo.done;
  } else if (event.target.classList.contains("delete")) {
    todos = todos.filter((t) => t.id !== id); // keep everything EXCEPT this one
  } else {
    return; // clicked the text or empty space: nothing to do
  }
  render();
});

// TODO 6
clearBtn.addEventListener("click", () => {
  todos = todos.filter((t) => !t.done);
  render();
});

render();
