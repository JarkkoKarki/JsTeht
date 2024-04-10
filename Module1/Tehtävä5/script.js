const Year = parseInt(prompt("Kerro vuosiluku"))

if (Year % 4 ===0) {
  if (Year % 100 !== 0) {
    document.querySelector('#target').innerHTML = 'Karkausvuosi';
  } else if (Year % 400 === 0) {
    document.querySelector('#target').innerHTML = 'Karkausvuosi';
  }  else {
      document.querySelector('#target').innerHTML = "Ei ole karkausvuosi"
    }
} else {
  document.querySelector('#target').innerHTML = 'Ei ole karkausvuosi';
}