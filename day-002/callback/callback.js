function thinking(name, callback) {
    if (callback !== undefined) {
      console.log(`${name} is thinking.`);
      callback();
      console.log(`This time, the function provides a callback function named '${callback.name}'.`);
    } else {
      console.log(`This time, the function does not provide any callback, and it only receives the name '${name}' as an argument.`);
      console.log(`${name} is thinking.`);
    }
  }
  
  function hello() {
    console.log(`Hello 👋 from the callback.`);
  }
  
  thinking("Tamil");
  // Output: 
  
  // This time, the function does not provide any callback, and it only receives the name 'Tamil' as an argument.
  // Tamil is thinking.

  
  thinking("John", hello);
  // Output:

  // John is thinking.
  // Hello 👋 from the callback.
  // This time, the function provides a callback function named 'hello'.
  
