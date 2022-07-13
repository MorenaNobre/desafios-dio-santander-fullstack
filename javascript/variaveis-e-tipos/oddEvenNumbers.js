function replacesOddNumbersToZero(array) {
  if (!array) return -1
  if (!array.length) return -1

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      console.log("This number is zero.");
    } else if (array[i] % 2 === 0) {
      console.log(`Replacing ${array[i]} for 0.`);
      array[i] = 0;
    }
  }

  return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(replacesOddNumbersToZero(arr));

let arr2 = [0, 3, 4, 6, 80, 33, 23, 90];
console.log(replacesOddNumbersToZero(arr2));

let arr3 = [];
console.log(replacesOddNumbersToZero(arr3));
console.log(replacesOddNumbersToZero(null));
console.log(replacesOddNumbersToZero(undefined));
console.log(replacesOddNumbersToZero(false));
