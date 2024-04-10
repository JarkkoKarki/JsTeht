const StartYear = parseInt(prompt("Ensimmäinen vuosiluku"))
const EndYear = parseInt(prompt("Viimeinen vuosiluku"))
let HTML = ''
for (let i = StartYear; i <= EndYear; i++) {
  if (i % 4 === 0) {
    if (i % 100 !== 0) {
      HTML += `<li>${i}</li>`;
    } else if (i % 400 === 0) {
      HTML += `<li>${i}</li>`;
    }
  }
}
document.querySelector('#target').innerHTML = `<ul>${HTML}</ul>`;