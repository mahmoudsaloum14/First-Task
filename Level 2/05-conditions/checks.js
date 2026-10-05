checks(function () {
  check("TODO 1: canVote(18) → true", () => canVote(18), true);
  check("TODO 1: canVote(17) → false", () => canVote(17), false);
  check('TODO 2: letterGrade(95) → "A"', () => letterGrade(95), "A");
  check('TODO 2: letterGrade(90) → "A" (edge!)', () => letterGrade(90), "A");
  check('TODO 2: letterGrade(89) → "B"', () => letterGrade(89), "B");
  check('TODO 2: letterGrade(75) → "C"', () => letterGrade(75), "C");
  check('TODO 2: letterGrade(60) → "D"', () => letterGrade(60), "D");
  check('TODO 2: letterGrade(59) → "F"', () => letterGrade(59), "F");
  check("TODO 3: ticketPrice(3) → 0", () => ticketPrice(3), 0);
  check("TODO 3: ticketPrice(10) → 5", () => ticketPrice(10), 5);
  check("TODO 3: ticketPrice(30) → 10", () => ticketPrice(30), 10);
  check("TODO 3: ticketPrice(65) → 7", () => ticketPrice(65), 7);
  check("TODO 4: canEnter(15, true) → true", () => canEnter(15, true), true);
  check("TODO 4: canEnter(15, false) → false", () => canEnter(15, false), false);
  check("TODO 4: canEnter(10, true) → false", () => canEnter(10, true), false);
  check('Bonus: letterGrade(120) → "Invalid"', () => letterGrade(120), "Invalid");
});
