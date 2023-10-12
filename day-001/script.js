const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (e.g., waiting for 2 seconds)
  setTimeout(() => {
    const randomValue = Math.random();
    
    if (randomValue < 0.5) {
      resolve("Operation successful: " + randomValue);
    } else {
      reject("Operation failed: " + randomValue);
    }
  }, 2000);
});

// To handle the Promise's resolution or rejection, use the .then() and .catch() methods:
myPromise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
