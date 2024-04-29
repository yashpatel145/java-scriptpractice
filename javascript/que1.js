
// task1
//Mark and Johan's information 1
const markD1 = {
    mass: 78, 
    height: 1.69 
};

const johanD1 = {
    mass: 92, 
    height: 1.95 
};

//  Mark and Johan's information 2
const markD2 = {
    mass: 95, 
    height: 1.88 
};

const johanD2 = {
    mass: 85, 
    height: 1.76 
};

// calculate BMI
function calcBMI(mass, height) {
    return mass / (height * height);
}

// Calculate BMI for Data 1
const markBMI1 = calcBMI(markD1.mass, markD1.height);
const johanBMI1 = calcBMI(johanD1.mass, johanD1.height);

// Calculate BMI for Data 2
const markBMI2 = calcBMI(markD2.mass, markD2.height);
const johanBMI2 = calcBMI(johanD2.mass, johanD2.height);

// if Mark has a higher BMI than Johan for all data 
const markHigh1 = markBMI1 > johanBMI1;
const markHigh2 = markBMI2 > johanBMI2;

// results
console.log("Data 1:");
console.log("Mark BMI:", markBMI1);
console.log("Johan BMI:", johanBMI1);
console.log("Mark is a higher  than Johan:", markHigh1);

console.log("\nData 2:");
console.log("Mark BMI:", markBMI2);
console.log("Johan BMI:", johanBMI2);
console.log("Mark is a higher than Johan:", markHigh2);





