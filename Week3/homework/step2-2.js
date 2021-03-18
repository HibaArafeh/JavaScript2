'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i === stopIndex; i++) {
    numbers.push(i);
  }
  numbers.forEach(element => {
    if (element % 3 === 0 && element % 5 === 0) {
      threeCallback(element);
      fiveCallback(element);
    } else if (element % 3 === 0) {
      threeCallback(element);
    } else if (element % 5 === 0) {
      fiveCallback(element);
    } else {
      console.log('The number is not divisible with 3 or 5');
    }
  });
}

function sayThree(number) {
  console.log(number + ' is divisible by 3');
}

function sayFive(number) {
  console.log(number + ' is divisible by 5');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
