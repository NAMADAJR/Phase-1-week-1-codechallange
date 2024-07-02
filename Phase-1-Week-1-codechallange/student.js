function grade(marks) {
  if (isNaN(marks)) {  //checks if data entered is a number
    return "Enter a number!";
  } else if (marks > 100) {  //checks if marks are less or equals to 100
    return "Marks should be less that 100";
  } else if (marks < 0) {
    return "Marks should be more that 0";  //checks if marks are more or less than 0
  } else if (marks > 79) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else if (marks >= 40) {
    return "D";
  } else {
    return "E";
  }
}

console.log(`The grade is: ${grade(70)}`);
