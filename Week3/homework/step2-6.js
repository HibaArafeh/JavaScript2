'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  const newTwoDArray = [];
  for (let i = 0; i < arr.length; i++) {
    newTwoDArray.push(...arr[i]);
  }
  return newTwoDArray;
}
function flattenArray3d(arr) {
  const newThreeDArray = [];
  for (let i = 0; i < arr.length; i++) {
    newThreeDArray.push(...arr[i]);
  }
  return flattenArray2d(newThreeDArray);
}
console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
