checks(function () {
  check("TODO 1: firstName is a non-empty string", () => typeof firstName === "string" && firstName.trim() !== "");
  check("TODO 2: lastName is a non-empty string", () => typeof lastName === "string" && lastName.trim() !== "");
  check('TODO 3: age is a number, not a string like "20"', () => typeof age, "number");
  check("TODO 4: fullName is firstName + space + lastName", () => fullName === `${firstName} ${lastName}`);
  check("TODO 6: intro includes fullName", () => intro.includes(fullName));
  check("TODO 6: intro includes age", () => intro.includes(String(age)));
  check("TODO 6: intro was logged", () => consoleHistory.some((call) => call.includes(intro)));
  check("Bonus: favoriteColor exists (a let you changed)", () => typeof favoriteColor === "string");
});
