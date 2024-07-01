let variable1 = 3; //use let because it will be re-assigned later on
console.log(variable1);

const calculation = 2 + 3; //using const because it will not be re-assigned
console.log(calculation);
console.log(variable1 + calculation);

const result = variable1 + calculation;
console.log(result);

const message = 'hello';
console.log(message); 
console.log(';');

variable1 = 5;
console.log(variable1);

variable1 = variable1 + 1;
console.log(variable1);

var variable3 = 3; //var can also be re-assigned
console.log(typeof variable3);