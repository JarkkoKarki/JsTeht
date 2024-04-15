let Numbers = []
let ok = false

while (!ok) {
  for (let i = 0; !ok; i++) {
    let num = parseInt(prompt("Kerro numero 0 lopettaa ohjelman."))
    Numbers.push(num)
    if (num === 0) {
      Numbers.sort()
      Numbers.reverse()
      for (let x = 0; x < Numbers.length; x++) {
        console.log(Numbers[x])
        ok = true
      }
    }
  }
}
