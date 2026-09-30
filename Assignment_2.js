// Assignment 2 - runs in the browser console when the "Run in console" button is pressed.
// Open the console with F12 (Console tab) to see the output.

// ===== Part B: Pass or Fail Analysis =====
function partB() {
  const examScores = [67, 78, 45, 89, 94, 56, 72, 81, 63, 90];
  const passingScore = 50;
  let passCount = 0;

  console.log("===== Part B: Pass or Fail Analysis =====");
  for (let i = 0; i < examScores.length; i++) {
    let result;
    if (examScores[i] >= passingScore) {
      result = "Pass";
      passCount++;
    } else {
      result = "Fail";
    }
    console.log(`Score: ${examScores[i]} - ${result}`);
  }
  console.log(`Total passing students: ${passCount}`);
}

// ===== Part C: Student IDs and Statistics =====
function partC() {
  const examScores = [67, 78, 45, 89, 94, 56, 72, 81, 63, 90];
  const studentIds = ["STU001", "STU002", "STU003", "STU004", "STU005",
                      "STU006", "STU007", "STU008", "STU009", "STU010"];

  console.log("===== Part C: Student IDs and Statistics =====");
  let highest = examScores[0];
  let lowest = examScores[0];
  let total = 0;

  for (let i = 0; i < studentIds.length; i++) {
    console.log(`${studentIds[i]}: ${examScores[i]}`);
    if (examScores[i] > highest) highest = examScores[i];
    if (examScores[i] < lowest) lowest = examScores[i];
    total += examScores[i];
  }

  console.log("--- Summary ---");
  console.log(`Highest score: ${highest}`);
  console.log(`Lowest score: ${lowest}`);
  console.log(`Average score: ${(total / examScores.length).toFixed(1)}`);
}

// ===== Part D: Capitalize a Name =====
function partD() {
  const name = "maria smith";
  const corrected = name
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");

  console.log("===== Part D: Capitalize a Name =====");
  console.log(`Original: ${name}`);
  console.log(`Corrected: ${corrected}`);
}

// ===== Part E: Clean an Email Address =====
function partE() {
  const email = "   Maria.Smith @Example.COM  ";
  const cleaned = email.replaceAll(" ", "").toLowerCase();

  console.log("===== Part E: Clean an Email Address =====");
  console.log(`Original: "${email}"`);
  console.log(`Cleaned: "${cleaned}"`);
}

const programs = [partB, partC, partD, partE];

document.getElementById("run-console-btn").addEventListener("click", () => {
  console.clear();
  programs.forEach((run) => {
    run();
    console.log("");
  });
});
