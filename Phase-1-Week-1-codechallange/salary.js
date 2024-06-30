function calculateNetSalary(basicSalary, benefits) {
  // Constants for tax rates and deductions
  const TAX_BANDS = [
    { limit: 24000, rate: 0.1 },
    { limit: 16000, rate: 0.15 },
    { limit: 14000, rate: 0.2 },
    { limit: 12000, rate: 0.25 },
    { limit: 0, rate: 0.3 },
  ];

  const NHIF_RATES = [
    { limit: 6000, deduction: 170 },
    { limit: 8000, deduction: 250 },
    { limit: 12000, deduction: 400 },
    { limit: 18000, deduction: 600 },
    { limit: 25000, deduction: 750 },
    { limit: 30000, deduction: 850 },
    { limit: 35000, deduction: 900 },
    { limit: 40000, deduction: 950 },
    { limit: 45000, deduction: 1000 },
    { limit: 50000, deduction: 1100 },
    { limit: 60000, deduction: 1200 },
    { limit: 70000, deduction: 1300 },
    { limit: 80000, deduction: 1400 },
    { limit: 90000, deduction: 1500 },
    { limit: 100000, deduction: 1600 },
  ];

  const NSSF_RATE_EMPLOYEE = 0.06;
  const NSSF_RATE_EMPLOYER = 0.06;

  // Calculate gross salary
  let grossSalary = basicSalary + benefits;

  // Calculate NHIF deduction
  let nhifDeduction = 0;
  for (let i = 0; i < NHIF_RATES.length; i++) {
    if (grossSalary <= NHIF_RATES[i].limit) {
      nhifDeduction = NHIF_RATES[i].deduction;
      break;
    }
  }
  if (nhifDeduction === 0) {
    nhifDeduction = 1700; // Max NHIF deduction
  }

  // Calculate NSSF deduction
  let nssfDeduction = grossSalary * NSSF_RATE_EMPLOYEE;

  // Calculate taxable income
  let taxableIncome = grossSalary - nhifDeduction - nssfDeduction;

  // Calculate PAYE (tax) deduction
  let tax = 0;
  for (let i = 0; i < TAX_BANDS.length; i++) {
    if (taxableIncome > TAX_BANDS[i].limit) {
      tax += (taxableIncome - TAX_BANDS[i].limit) * TAX_BANDS[i].rate;
      taxableIncome = TAX_BANDS[i].limit;
    }
  }

  // Calculate net salary
  let netSalary = grossSalary - nhifDeduction - nssfDeduction - tax;

  // Return all calculated values
  return {
    "Gross Salary": grossSalary,
    "NHIF Deduction": nhifDeduction,
    "NSSF Deduction": nssfDeduction,
    "Tax (PAYE)": tax,
    "Net Salary": netSalary,
  };
}

// Example usage:
const basicSalary = parseFloat(prompt("Enter Basic Salary:"));
const benefits = parseFloat(prompt("Enter Benefits:"));

const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("\nSalary Details:");
for (const key in salaryDetails) {
  console.log(`${key}: KES ${salaryDetails[key].toFixed(2)}`);
}
