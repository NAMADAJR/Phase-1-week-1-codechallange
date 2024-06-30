# Phase 1 week 1 Code challange#

## Project Description##

## What your applications do##

### 1.Student Grade Generator###

The Mark is enetered here

```js
let marks = 100;
```

This finction assigns the mark to the corresponding grade

```js
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
```

This is displays the mark and grade

```js
console.log(`The grade for ${marks} marks is: ${grade}`);
```

### 2.Speed Detector###

These are the constants used in the computation of the computations

```js
const speedLimit = 70;
const kmPerDemeritPoint = 5;
const pointsThreshold = 12;
```

This function checks the speed against the speed limit and then computes the point to be awarded

```js
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
```

The value entered here is the speed of the car

```js
checkSpeed(89);
```

### 3.Net Salary Calculator###

This function determines the NHIF contribution based on the gross salary

```js
const calculateNHIF = (grossSalary) => {
  if (grossSalary >= 0 && grossSalary <= 5999) {
    return 150;
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
    return 300;
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
    return 400;
  } else if (grossSalary >= 12000 && grossSalary <= 14999) {
    return 500;
  } else if (grossSalary >= 15000 && grossSalary <= 19999) {
    return 600;
  } else if (grossSalary >= 20000 && grossSalary <= 24999) {
    return 750;
  } else if (grossSalary >= 25000 && grossSalary <= 29999) {
    return 850;
  } else if (grossSalary >= 30000 && grossSalary <= 34999) {
    return 950;
  } else if (grossSalary >= 35000 && grossSalary <= 39999) {
    return 1000;
  } else if (grossSalary >= 40000 && grossSalary <= 44999) {
    return 1000;
  } else if (grossSalary >= 45000 && grossSalary <= 49999) {
    return 1100;
  } else if (grossSalary >= 50000 && grossSalary <= 59999) {
    return 1200;
  } else if (grossSalary >= 60000 && grossSalary <= 69999) {
    return 1300;
  } else if (grossSalary >= 70000 && grossSalary <= 79000) {
    return 1400;
  } else if (grossSalary >= 80000 && grossSalary <= 89999) {
    return 1500;
  } else if (grossSalary >= 90000 && grossSalary <= 99999) {
    return 1600;
  } else if (grossSalary >= 100000) {
    return 1700;
  }
};
```

This function calculates PAYE

```js
function calculatePAYE(monthlyPay) {
  const personalRelief = 2400;
  const ownerOccupierInterest = 25000;
  const isDisabled = false;
  const annualPersonalRelief = personalRelief * 12;
  const annualInsuranceRelief = 60000;
  const annualPensionContribution = 240000;
  const annualHousingRelief = 108000;
  const annualOwnerOccupierInterest = Math.min(
    300000,
    ownerOccupierInterest * 12
  );
  const annualDisabilityExemption = isDisabled ? 1800000 : 0;

  let annualPay = monthlyPay * 12;
  let tax = 0;

  if (annualPay <= 288000) {
    tax = annualPay * 0.1;
  } else if (annualPay <= 388000) {
    let taxForFirstBracket = 288000 * 0.1;
    let remainingAnnualPay = annualPay - 288000;
    tax = taxForFirstBracket + remainingAnnualPay * 0.25;
  } else {
    let taxForFirstBracket = 288000 * 0.1;
    let taxForSecondBracket = 100000 * 0.25;
    let remainingAnnualPay = annualPay - 388000;
    tax = taxForFirstBracket + taxForSecondBracket + remainingAnnualPay * 0.3;
  }
```

This applys annual reliefs and return to monthly

```js
let annualTax =
  tax -
  annualPersonalRelief -
  annualInsuranceRelief -
  annualPensionContribution -
  annualHousingRelief -
  annualOwnerOccupierInterest -
  annualDisabilityExemption;

annualTax = Math.max(annualTax, 0);

return annualTax / 12;
}
```

This function calculates NSSF

```js
const calculateNSSF = (monthlySalary) => {
  const tier1Limit = 7000;
  const tier2Limit = 36000;

  let tier1Contribution = Math.min(monthlySalary, tier1Limit) * 0.06;
  let tier2Contribution = 0;

  if (monthlySalary > tier1Limit) {
    tier2Contribution =
      Math.min(monthlySalary - tier1Limit, tier2Limit - tier1Limit) * 0.06;
  }

  let totalEmployeeContribution = tier1Contribution + tier2Contribution;
  let totalEmployerContribution = tier1Contribution + tier2Contribution;

  return totalEmployeeContribution + totalEmployerContribution;
};
```

This function calculates net salary

```js
const calculateNetSalary = (basicSalary, benefits = 0) => {
  const grossSalary = basicSalary + benefits;
  const nssfDeduction = calculateNSSF(grossSalary);
  const taxableIncome = grossSalary - nssfDeduction;
  const paye = calculatePAYE(taxableIncome);
  const nhifDeduction = calculateNHIF(grossSalary);
  const netSalary = grossSalary - nssfDeduction - paye - nhifDeduction;
  return netSalary;
};
```

The value entered is the gross salary to be taxed

```js
console.log(calculateNetSalary(100000));
```
