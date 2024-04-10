const diceNum = parseInt(prompt("Noppien lkm: "))
const diceTarg = parseInt(prompt("Tavoite luku"))
let mahdolliset = 0;

for (let i = 0; i<10000; i++) {
  let summa = 0;
  for (let j = 0; j < diceNum; j++) {
    summa += Math.floor(Math.random()*6) + 1;
  }
  if (summa === diceTarg) {
    mahdolliset++;
  }
}

const todennakoisyys = (mahdolliset / 10000 * 100).toFixed(2);
document.querySelector('#target').innerHTML = `Probability to get the sum ${diceTarg} with ${diceNum} dice is ${todennakoisyys}%`;