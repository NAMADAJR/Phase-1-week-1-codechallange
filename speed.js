//constants
const speedLimit = 70;

const kmPerDemeritPoint = 5;

const pointsThreshold = 12;

//function that check speed
function checkSpeed(speed) {
  if (speed < speedLimit) {
    console.log("Ok");
  } else {
    let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    if (demeritPoints > pointsThreshold) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }
}

/*
checkSpeed(80); // Output: Points: 2
checkSpeed(65); // Output: Ok
checkSpeed(95); // Output: License suspended
*/
