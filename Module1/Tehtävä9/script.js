const PrimeNumber = parseInt(prompt("Kerro kokonaisluku"))
let isPrime = true

if (PrimeNumber >= 2) {
  for (let i = 2; i <= Math.sqrt(PrimeNumber); i++) {
    if (PrimeNumber % i === 0) {
      isPrime = false;
      break;
    }
  }
} else {
  isPrime = false;
}

if (isPrime) {
  document.querySelector('#target').innerHTML = 'Alkuluku';
} else {
  document.querySelector('#target').innerHTML = 'Ei ole Alkuluku';
}