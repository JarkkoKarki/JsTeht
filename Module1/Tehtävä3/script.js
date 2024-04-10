const luku1 = parseInt(prompt("Anna ensimmäinen luku"));
const luku2 = parseInt(prompt("Anna toinen luku"));
const luku3 = parseInt(prompt("Anna kolmas luku"));
const paragraphs = document.querySelectorAll('.target');
paragraphs[0].innerHTML = luku1 + luku2 + luku3;
paragraphs[1].innerHTML = luku1 * luku2 * luku3;
paragraphs[2].innerHTML = (luku1 + luku2 + luku3) / 3;