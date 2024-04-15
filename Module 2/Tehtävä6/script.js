let numbers = [];
let ok = false;
let HTML = "";

while (!ok) {
  let num = Math.floor(Math.random()* 6) + 1;
    if (num === 6) {
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
