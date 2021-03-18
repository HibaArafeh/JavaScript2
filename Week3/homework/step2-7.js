'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x); // The result is 9

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y); // The result is {x:10}

// Add your explanation as a comment here
//  Any changes that you make to the arguments inside the function does not affect the passing variables outside of the function. In other words, the changes made to the arguments are not reflected outside of the function.
//  If function arguments are passed by reference, the changes of variables that you pass into the function will be reflected outside the function. This is not possible in JavaScript.
