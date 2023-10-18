function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Tamil", sayGoodbye);

// The sayGoodbye function is used as a callback within the greet function,
// and it is executed after the greeting message is displayed.
