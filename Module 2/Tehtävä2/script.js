const osallistujat = parseInt(prompt("Montako osallistujaa"));
let HTML = "";
let nimet = [];

for (let i = 1; i <= osallistujat; i++) {
  nimet.push(prompt(`${i}. Nimi`));
}

nimet.sort()

for (let i = 0; i < nimet.length; i++) {
  HTML += `<li>${nimet[i]}</li>`
}

document.querySelector("div").innerHTML = `<ul>${HTML}</ul>`