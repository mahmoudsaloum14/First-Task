// =============================================================
// Level 2 · Task 2 — Conditions  (SOLUTION)
// =============================================================

// TODO 1: the long way would be:
//   if (age >= 18) { return true; } else { return false; }
// But age >= 18 is ALREADY true or false, so return it directly.
function canVote(age) {
  return age >= 18;
}

// TODO 2: go from the highest grade down. Once a return runs, the function
// stops, so each later check already knows the score is below the one above.
function letterGrade(score) {
  if (score < 0 || score > 100) return "Invalid"; // BONUS: || means "or"
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

// TODO 3: the same idea with if / else if / else. Written out in full
// for comparison.
function ticketPrice(age) {
  if (age < 5) {
    return 0;
  } else if (age < 18) {
    return 5;
  } else if (age >= 65) {
    return 7;
  } else {
    return 10;
  }
}

// TODO 4: && is only true when BOTH sides are true.
function canEnter(age, hasTicket) {
  return age >= 12 && hasTicket;
}

console.log("letterGrade(85) =", letterGrade(85));
console.log("ticketPrice(70) =", ticketPrice(70));
