//changing the values of marks to get different grades
let marks = 100;

//function that assigns grades
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

//shows marks and grade
console.log(`The grade for ${marks} marks is: ${grade}`);
