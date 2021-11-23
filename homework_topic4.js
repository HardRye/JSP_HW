//submit homework to the repository that you created for git lecture

//
// 1. Compute the exponent of a number (using recursion);
// 8^2 = 8 x 8 = 64

const exponentRecursion = (number, exponent) =>
  exponent <= 1 ? number : number * exponentRecursion(number, exponent - 1);

console.log(exponentRecursion(5, 0)); // 5
console.log(exponentRecursion(5, 1)); // 5
console.log(exponentRecursion(2, 3)); // 8
console.log(exponentRecursion(3, 3)); // 27
console.log(exponentRecursion(3, 4)); // 81
console.log(exponentRecursion(8, 2)); // 16

//
// 2. Write functions min and max that will find min and max number in array using apply

// NOTE: We don't need context to call Max.min function on random numeric array. You can use "null" instead of empty object "{}" in next two functions.
const minNumberInArray = (arr) => Math.min.apply({}, arr); // using call and spread operator: Math.min.call({}, ...arr);
const maxNumberInArray = (arr) => Math.max.apply({}, arr); // using call and spread operator: Math.max.call({}, ...arr);

const testArr1 = [56, 42, 85, 73, 12, 19, 58, 49, 9];
console.log(minNumberInArray(testArr1)); // 9
console.log(maxNumberInArray(testArr1)); // 85

const testArr2 = [56, -42, 85, -73, 12, -19, 58, -49, Infinity];
console.log(minNumberInArray(testArr2)); // -73
console.log(maxNumberInArray(testArr2)); // Infinity

//
// 3. write a function displayCarDetails that will receive as argument ownerName
//    and return a string with car registration number, branch and color.
//    Please make examples for three different cars

// NOTE: I didn't understand what means branch in car context, so I replaced: branch => brand
const displayCarDetails = function (ownerName) {
  return `${ownerName} drives a ${this.color} ${this.brand}, registration number: ${this.regNumber}`;
};

const car1 = { color: "blue", regNumber: "ERS 8579", brand: "Infinity" };
const car2 = { color: "white", regNumber: "586 5GX", brand: "Toyota" };
const car3 = { color: "black", regNumber: "FGY-5597", brand: "Chevrolet" };

console.log(displayCarDetails.call(car1, "Jimmy"));
console.log(displayCarDetails.call(car2, "Brandon"));
console.log(displayCarDetails.call(car3, "Margaret"));

//
// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that

// NOTE: This function already returns correct answer, you should check the task once again.
function greet(person) {
  if (person.name == "amy") {
    return "hey amy";
  } else {
    return "hey arnold";
  }
}

const amy = { name: "amy" };

console.log(greet(amy));

//
// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it doesn’t do what we expect - fix that(find two solutions)

// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0)
// }

// 1
for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0);
}

// 2
for (var i = 0; i < 4; i++) {
  setTimeout(console.log, 0, i);
}
