// These checks look at the PAGE, not at your variables, so any correct
// approach passes.
checks(function () {
  const $ = (sel) => document.querySelector(sel);
  check("TODO 1: #title no longer says \"Title goes here\"", () =>
    $("#title").textContent.trim() !== "Title goes here" && $("#title").textContent.trim() !== "");
  check('TODO 2: .subtitle says "Learning JavaScript"', () => $(".subtitle").textContent.trim(), "Learning JavaScript");
  check("TODO 3: #card has the class highlight", () => $("#card").classList.contains("highlight"));
  check("TODO 4: #skills has 3 <li> elements", () => $("#skills").querySelectorAll("li").length, 3);
  check("TODO 4: the <li> texts are HTML, CSS, JavaScript", () =>
    [...$("#skills").querySelectorAll("li")].map((li) => li.textContent.trim()), ["HTML", "CSS", "JavaScript"]);
  check('TODO 5: notes start with "1. ", "2. ", "3. "', () =>
    [...document.querySelectorAll(".note")].map((n) => n.textContent.slice(0, 3)), ["1. ", "2. ", "3. "]);
});
