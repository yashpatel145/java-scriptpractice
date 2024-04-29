
// steven is still making calculator using same rule as before tip 15% of the bill if the bill value beetween 50 and 300 and if the value is different the tip is 20%.
// write function calcTip  that take any bill value as an input and return the corresponding tip calculated based on above rule . use the function type you like the most test the function using a bill value of 100
// and now lets use arrays so create an array 'bills' containnig the test data below
// creat an array' tips' containing the tip value for each bill calculated from the function you created before
//bonous create an array 'total' containing the total values so the bill+tip
//test data 125,555,44 



function calcTip(bill) {
  // Tip percentage based on bill amount
  const tipPercentage = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
  return bill * tipPercentage;
}

// function with a bill value of 100
const billValue = 100;
const tipamount = calcTip(billValue);
console.log(`The tip for a bill of $${billValue} is $${tipamount.toFixed(2)}`);

// Create an array of bills
const bills = [125, 555, 44];

// Create an array to store the tips
const tips = bills.map(bill => calcTip(bill));

// Create an array to store the total amount 
const totals = bills.map((bill, index) => bill + tips[index]);

// Print the bills, tips, and totals
console.log("\nBills\tTips\tTotals");
console.log("-------  -----  -------");
for (let i = 0; i < bills.length; i++) {
  console.log(`$${bills[i].toFixed(2)}\t$${tips[i].toFixed(2)}\t$${totals[i].toFixed(2)}`);
}
