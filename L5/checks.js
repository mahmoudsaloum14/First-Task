// These checks use the app like a user would: type, click, tick. They first
// save your current todos and put them back at the end, so running the
// checks doesn't wipe your list.
checks(function () {
  const $ = (sel) => document.querySelector(sel);
  const items = () => [...$("#list").querySelectorAll("li")];
  const add = (text) => { $("#new-todo").value = text; $("#add-form").requestSubmit(); };

  let prevented = null;
  const guard = (e) => { prevented = e.defaultPrevented; e.preventDefault(); };
  $("#add-form").addEventListener("submit", guard);

  let saved = null;
  try {
    saved = JSON.parse(JSON.stringify(todos));
    todos.length = 0;
    render();
  } catch (err) {
    check("Your code has a `todos` array and a `render()` function", () => { throw err; });
    $("#add-form").removeEventListener("submit", guard);
    return;
  }

  try {
    check("TODO 1: an empty todos array renders an empty list", () => items().length, 0);
    check('TODO 3: shows "0 left" when empty', () => $("#remaining").textContent.trim(), "0 left");

    add("Buy milk");
    check("TODO 4: adding a todo creates one <li>", () => items().length, 1);
    check('TODO 4: the <li> shows "Buy milk"', () => items()[0].textContent.includes("Buy milk"));
    check("TODO 4: the input is cleared after adding", () => $("#new-todo").value, "");
    check("The form's submit calls preventDefault()", () => prevented, true);

    add("   ");
    check("TODO 4: empty or spaces-only text is NOT added", () => items().length, 1);

    add("Call Omar");
    check('TODO 3: two open todos show "2 left"', () => $("#remaining").textContent.trim(), "2 left");

    items()[0]?.querySelector('input[type="checkbox"]')?.click();
    check("TODO 5: ticking a checkbox gives the <li> the class done", () => items()[0]?.classList.contains("done") === true);
    check("TODO 2: the checkbox stays ticked after re-rendering", () => items()[0]?.querySelector("input")?.checked === true);
    check('TODO 3: after ticking one, it shows "1 left"', () => $("#remaining").textContent.trim(), "1 left");

    items()[1]?.querySelector(".delete")?.click();
    check("TODO 5: ✕ deletes that todo", () => items().map((li) => li.querySelector("span").textContent), ["Buy milk"]);

    const before = items().length; // should be 1: "Buy milk", which is done
    $("#clear-done").click();
    check("TODO 6: Clear completed removes the done todos", () => before === 1 && items().length === 0);
  } finally {
    // Put the student's own todos back.
    $("#add-form").removeEventListener("submit", guard);
    todos.length = 0;
    saved.forEach((t) => todos.push(t));
    render();
  }
});
