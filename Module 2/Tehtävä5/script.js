let numbers = []
let ok = false

while (!ok) {
    let num = parseInt(prompt("Kerro luku"))
    let found = false
    for (let a = 0; a < numbers.length; a++) {
      if (numbers[a] === num) {
          ok = true
          break;
        }
    }
    if (!ok) {
      numbers.push(num)
    }
}
numbers.sort((a, b) => a - b);
console.log(numbers.join(", "));