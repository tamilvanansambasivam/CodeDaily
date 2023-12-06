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

// A closure is the combination of a function bundled together (enclosed) 
// with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope 
// from an inner function. In JavaScript, closures are created every time 
// a function is created, at function creation time.

