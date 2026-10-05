// =============================================================
// Level 4 · Task 2 — Events: a click counter  (SOLUTION)
// =============================================================

let count = 0;

const countEl = document.querySelector("#count");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const resetBtn = document.querySelector("#reset");
const messageEl = document.querySelector("#message");

// ONE function makes the page match the state. The click handlers never
// touch the page themselves. They change `count` and ask render() to redraw.
function render() {
  // TODO 1
  countEl.textContent = count;

  // TODO 5: count === 0 is true or false, which is exactly what .disabled wants.
  minusBtn.disabled = count === 0;

  // TODO 6: the ternary (condition ? a : b) is a one-line if/else for values.
  const isHigh = count >= 10;
  messageEl.textContent = isHigh ? "That's a lot of clicks!" : "";
  countEl.classList.toggle("high", isHigh); // add when true, remove when false
}

// TODO 2: pattern: change state → render
plusBtn.addEventListener("click", () => {
  count++;
  render();
});

// TODO 3: guard so the count never goes negative.
// (The disabled button already stops clicks, but the logic should be safe on its own.)
minusBtn.addEventListener("click", () => {
  if (count > 0) count--;
  render();
});

// TODO 4
resetBtn.addEventListener("click", () => {
  count = 0;
  render();
});

// BONUS: keyboard support. The event object says which key was pressed.
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") plusBtn.click();
  if (event.key === "ArrowDown" && count > 0) minusBtn.click();
});

render();
