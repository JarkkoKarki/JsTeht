let numbers = [];
for (let i = 0; i < 5; i++) {
  numbers[i] = prompt(`${i + 1}. Numero`);
}
for (let z = 4; z >= 0; z--) {
  console.log(numbers[z]);
}
