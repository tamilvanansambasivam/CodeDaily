function x(){
  var a=17;
  function y(){
    return a
  }
  return y;
}

z=x()() // IIFE (Immediately Invoked Function Expression)
console.log(z) //output is 17 

