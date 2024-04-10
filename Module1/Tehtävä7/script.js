const DiceCount = parseInt(prompt("Montako noppaa heitetään"));
let NoppaHTML = '';
for (let i = 0; i < DiceCount; i++) {
  const diceRoll = Math.floor(Math.random()*6)+1;
  NoppaHTML +=`<li>Heitto ${i+1}: ${diceRoll}</li>`;
}
document.querySelector('#target').innerHTML = `<ul>${NoppaHTML}</ul>`;