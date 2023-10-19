const printFirst = () => console.log("First");
const printSecondWithDelay = () => setTimeout(() => console.log("Second"), 500);
const printThird = () => console.log("Third");

printFirst();
printSecondWithDelay();
printThird();


/*
"First" and "Third" are logged immediately, and "Second" is logged 
after a 500 ms delay due to the setTimeout function in printSecondWithDelay.
*/
