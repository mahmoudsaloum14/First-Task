// These checks CLICK the real buttons and read the page, like a user would.
checks(function () {
  const $ = (sel) => document.querySelector(sel);
  const shown = () => $("#count").textContent.trim();
  const click = (sel, times = 1) => { for (let i = 0; i < times; i++) $(sel).click(); };

  click("#reset");
  check("TODO 4: Reset shows 0", () => shown(), "0");

  click("#plus", 3);
  check("TODO 2: clicking + three times shows 3", () => shown(), "3");

  click("#minus");
  check("TODO 3: clicking − once shows 2", () => shown(), "2");

  click("#reset");
  check("TODO 4: Reset goes back to 0", () => shown(), "0");

  $("#minus").disabled = false; // make sure the next click actually fires
  click("#minus");
  check("TODO 3: − at 0 stays 0 (no negatives)", () => shown(), "0");
  check("TODO 5: − is disabled when the count is 0", () => $("#minus").disabled, true);

  click("#plus");
  check("TODO 5: − is enabled again at 1", () => $("#minus").disabled, false);

  click("#plus", 9);
  check('TODO 6: at 10, #message says "That\'s a lot of clicks!"', () => $("#message").textContent.trim(), "That's a lot of clicks!");
  check("TODO 6: at 10, #count has the class high", () => $("#count").classList.contains("high"));

  click("#reset");
  check("TODO 6: after reset, the message is empty again", () => $("#message").textContent.trim(), "");
  check("TODO 6: after reset, the class high is removed", () => !$("#count").classList.contains("high"));
});
