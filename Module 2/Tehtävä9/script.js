function even(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

const numbers = [2, 7, 4];
const evenNumbers = even(numbers);

console.log(numbers)
console.log(evenNumbers)