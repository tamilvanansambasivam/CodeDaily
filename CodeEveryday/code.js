// Function Declaration
console.log(add(2, 3)); // Works even before the function declaration
function add(a, b) {
  return a + b;
}

// Function Expression
console.log(addExpression(2, 3)); // Results in an error
var addExpression = function(a, b) {
  return a + b;
};

