// =============================================================
// Level 4 · Task 2 — Events: a click counter
// =============================================================

let count = 0;
const countEl = document.querySelector("#count");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const resetBtn = document.querySelector("#reset");
const messageEl = document.querySelector("#message");
// TODO 1: make the page show the current count
function render() {
  countEl.textContent = count;
  // TODO 5
  minusBtn.disabled = count === 0;
  // TODO 6
  const isHigh = count >= 10;
  if (isHigh) {
    messageEl.textContent = "That's a lot of clicks!";
  } else {
    messageEl.textContent = "";
  }
  countEl.classList.toggle("high", isHigh);
}
// TODO 2: when plus is clicked
plusBtn.addEventListener("click", () => {
  count = count + 1;
  render();
});
// TODO 3: minus
minusBtn.addEventListener("click", () => {
  if (count > 0) {
    count = count - 1;
  }
  render();
});
// TODO 4: reset
resetBtn.addEventListener("click", () => {
  count = 0;
  render();
});
// BONUS
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    plusBtn.click();
  }

  if (event.key === "ArrowDown") {
    minusBtn.click();
  }
});
// Draw the page once at the start
render();