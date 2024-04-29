//Mark's and Johan's data
const marksD1 = {
    weight: 78,
    height: 1.69
}

const johansD1 = {
    weight: 92,
    height: 1.95
}

const marksD2 = {
    weight: 95,
    height: 1.88
}

const johansD2 = {
    weight: 85,
    height: 1.76
}

//calculate BMI
function calcBMI(weight, height) {
    return weight / (height ** 2);
}

// Calculate BMIs for datasets1
const marksBMI1 = calcBMI(marksD1.weight, marksD1.height);
const johansBMI1 = calcBMI(johansD1.weight, johansD1.height);

// Calculate BMIs for datasets2
const marksBMI2 = calcBMI(marksD2.weight, marksD2.height);
const johansBMI2 = calcBMI(johansD2.weight, johansD2.height);

// Compare BMIs for result result
function compareBMI(marksBMI, johansBMI) {
    if (marksBMI > johansBMI) {
        console.log(`Mark BMI (${marksBMI.toFixed(2)}) is higher than Johan BMI (${johansBMI.toFixed(2)})!`)
    } else {
        console.log(`Johan BMI (${johansBMI.toFixed(2)}) is higher than Mark BMI (${marksBMI.toFixed(2)})!`);
    }
}

console.log("Comparing Data 1:")
compareBMI(marksBMI1, johansBMI1)

console.log("\nComparing for Data 2:")
compareBMI(marksBMI2, johansBMI2);