// Function Declaration
console.log(multiply(2, 3)); // Hoisting allows calling before the declaration
function multiply(x, y) {
  return x * y;
}

// Function Expression
// console.log(divide(6, 2)); // This would result in an error because the function expression is not hoisted
var divide = function(x, y) {
  return x / y;
};
console.log(divide(6, 2)); // This works fine when the function expression is defined before calling
