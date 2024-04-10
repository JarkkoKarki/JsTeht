let vastaus = confirm("Should I calculate the square root?");
let juuri;
if (vastaus) {
  juuri = parseFloat(prompt("Give a number "));
  if (juuri >= 0) {
    document.querySelector('#target').innerHTML = Math.sqrt(juuri);
  } else {
    document.querySelector('#target').innerHTML = "The square root of negative number is not defined"
  }
} else {
  document.querySelector('#target').innerHTML = "The square root is not calculated."
}