// =============================================================
// Level 4 · Task 3 — Forms: a tip calculator  (SOLUTION)
// =============================================================

const form = document.querySelector("#tip-form");
const billInput = document.querySelector("#bill");
const tipSelect = document.querySelector("#tip");
const peopleInput = document.querySelector("#people");
const resultEl = document.querySelector("#result");
const errorEl = document.querySelector("#error");

function calculate() {
  // TODO 2: every .value is a string. Convert before doing maths.
  const bill = Number(billInput.value);
  const tipPercent = Number(tipSelect.value);
  const people = Number(peopleInput.value) || 1; // 0 or empty → fall back to 1

  // TODO 3: Number("") is 0 and Number("abc") is NaN. !(bill > 0) catches
  // both, because NaN > 0 is false. This is a "guard clause": handle the bad
  // case first and return, so the rest of the function can assume good data.
  if (!(bill > 0)) {
    errorEl.textContent = "Please enter a bill amount.";
    resultEl.textContent = "";
    return;
  }

  // TODO 4
  const tip = (bill * tipPercent) / 100;
  const total = bill + tip;
  const each = total / people;

  // TODO 5: toFixed(2) formats money. Only use it for DISPLAY, because it
  // returns a string.
  errorEl.textContent = "";
  resultEl.textContent = `Tip: $${tip.toFixed(2)} · Total: $${total.toFixed(2)} · Each: $${each.toFixed(2)}`;
}

// TODO 1: submit fires for a button click AND for Enter in any field.
// preventDefault stops the browser's default action (reloading the page).
form.addEventListener("submit", (event) => {
  event.preventDefault();
  calculate();
});

// BONUS: "input" events bubble up from each field to the form, so one
// listener here handles all three. This is called event delegation.
form.addEventListener("input", calculate);
