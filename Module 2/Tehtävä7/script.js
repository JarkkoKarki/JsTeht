
let numbers = [];
let ok = false;
let HTML = "";
let diceSides = parseInt(prompt("How many sides does the dice have?"))

while (!ok) {
  let num = Math.floor(Math.random()* diceSides) + 1;
    if (num === diceSides) {
      for (let a = 0; a < numbers.length; a++) {
        HTML += `<li>${numbers[a]}</li>`;
      }
      ok = true;
    }
    else {
      numbers.push(num);
    }
}

document.querySelector("div").innerHTML = `<ul>${HTML}</ul>`;
