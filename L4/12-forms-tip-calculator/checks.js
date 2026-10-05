// These checks type into the form and submit it. A last listener on the form
// records whether YOUR code called preventDefault(), and then prevents the
// reload itself so the checks can finish.
checks(function () {
  const $ = (sel) => document.querySelector(sel);
  const form = $("#tip-form");
  let prevented = null;
  const guard = (e) => { prevented = e.defaultPrevented; e.preventDefault(); };
  form.addEventListener("submit", guard);

  const fill = (bill, tip, people) => { $("#bill").value = bill; $("#tip").value = tip; $("#people").value = people; };
  const result = () => $("#result").textContent;

  fill("100", "15", "2");
  form.requestSubmit();
  check("TODO 1: submitting calls event.preventDefault()", () => prevented, true);
  check("TODO 5: $100, 15%, 2 people shows Tip $15.00", () => result().includes("Tip: $15.00"));
  check("TODO 5: … Total $115.00", () => result().includes("Total: $115.00"));
  check("TODO 5: … Each $57.50", () => result().includes("Each: $57.50"));
  check("TODO 2: numbers were converted (no \"10015\" style joining)", () => result() !== "" && !result().includes("10015"));

  fill("80", "20", "1");
  form.requestSubmit();
  check("TODO 4: $80, 20%, 1 person → Each $96.00", () => result().includes("Each: $96.00"));

  fill("", "15", "1");
  form.requestSubmit();
  check("TODO 3: an empty bill shows an error", () => $("#error").textContent.trim() !== "");
  check("TODO 3: an empty bill clears the old result", () => $("#error").textContent.trim() !== "" && result().trim() === "");

  fill("50", "10", "1");
  form.requestSubmit();
  check("TODO 5: a valid bill shows a result and clears the error", () =>
    result().includes("Each: $55.00") && $("#error").textContent.trim() === "");

  form.removeEventListener("submit", guard);

  fill("200", "10", "4");
  $("#bill").dispatchEvent(new Event("input", { bubbles: true }));
  check("Bonus: the result updates live while typing (no submit)", () => result().includes("Each: $55.00"));
});
