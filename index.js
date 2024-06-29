let marks = 59;

let grade;
if (marks > 79) {
  grade = "A";
} else if (marks >= 60) {
  grade = "B";
} else if (marks >= 50) {
  grade = "C";
} else if (marks >= 40) {
  grade = "D";
} else {
  grade = "E";
}

console.log(`The grade for ${marks} marks is: ${grade}`);
