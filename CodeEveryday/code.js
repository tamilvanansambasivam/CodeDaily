function outerFunction() {
  let outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

// Creating a closure by assigning the inner function to a variable
let closure = outerFunction();

// Executing the closure
closure(); // Outputs: I am from the outer function

