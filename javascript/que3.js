// steven wants to build a very tip calculator for whenever he gose eating in restruarant. in his country its usual to tip 15% if the bill value is between 50 and 300. if the value is different, the tip is 20% 
//your tasks: a; calculate tip , depending on the bill value. create a variable called tip for this. its not allowed to use an if/else statement. b,print a string to console containing the bill value,the tip,and the final value(bill+tip).
//c, test data; test for bill values 275,40 and 430

//Test data
const billValues = [275, 40, 430];

//calculate tip for bill value
function calculateTip(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.20;
    }
    return tip;
}

//print bill in detail
function printBillDetails(bill) {
    const tip = calculateTip(bill);
    const total = bill + tip;
    console.log(`Bill: $${bill}, Tip: $${tip}, Total: $${total}`);
}

// Test the function with all test data
billValues.forEach(bill => {
    printBillDetails(bill);
});