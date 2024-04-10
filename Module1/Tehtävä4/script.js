const HarrypotterName = prompt("Kerro Nimi")
const Number  = Math.floor(Math.random()*4) + 1
let Huone;
if (Number === 1)
  Huone = HarrypotterName + ", you are Gryffindor";
else if (Number === 2)
  Huone = HarrypotterName + ", you are Slytherin";
else if (Number === 3)
  Huone = HarrypotterName + ", you are Hufflepuff";
else if (Number === 4)
  Huone = HarrypotterName + ", you are Ravenclaw";

document.querySelector('#target').innerHTML = Huone;