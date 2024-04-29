//lets go back to mark and john comparing their bmis this time lets use object to implement the calculation remembber : bmi=mass/height **2 =mass/(height*height)(mass in kg and height in meter)
// for each of them create an object with properties for their full name,mass,and height(mark miller and johan smith)
//create 'calcBMI' method on each object to calculate the Bmi .store the bmi value to property. and also return it from the method
// log to the console who has the higher bmi, together with the full name and the respective BMI. example BMI(28.3) is higher than marks (23.9)
//test data marks weight 78 kg and is 1.69m tall.johan weight 92kg and is 1.95m tall


class Person {
    constructor(fullName, mass, height) {
      this.fullName = fullName;
      this.mass = mass;
      this.height = height;
      this.bmi = null;
    }
  
    calcBMI() {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  }
  
  //make objects for Mark and John
  const mark = new Person("Mark Miller", 78, 1.69);
  const john = new Person("Johan Smith", 92, 1.95);
  
  // Calculate BMI for both
  const markBMI = mark.calcBMI();
  const johnBMI = john.calcBMI();
  
  //who has the higher BMI
  const higherBMIPerson = markBMI > johnBMI ? mark : john;
  const lowerBMIPerson = markBMI > johnBMI ? john : mark;
  
  //result
  console.log(`${higherBMIPerson.fullName}'s BMI (${higherBMIPerson.bmi.toFixed(1)}) is higher than ${lowerBMIPerson.fullName}'s BMI (${lowerBMIPerson.bmi.toFixed(1)})`);
  