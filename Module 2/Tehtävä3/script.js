let nimet = [];
let HTML = '';
for (let i = 1; i <= 5; i++) {
  nimet.push(prompt(`${i}. Koiran nimi`));
}

nimet.sort().reverse();

for (let a = 0; a < nimet.length; a++) {
  HTML += `<li>${nimet[a]}</li>`;
}


document.querySelector("div").innerHTML = `<ul>${HTML}</ul>`;