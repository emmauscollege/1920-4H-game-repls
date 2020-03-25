// HowtoPlaatjes
// voorbeeld hoe je plaatjes kunt gebruiken in je game

// variabelen waar de plaatjes in worden gestopt
var imgA=0;
var imgB=0;

// deze functie wordt door de p5 library aangeroepen
// voordat de setup functie wordt uitgevoerd
// p5 gaat pas verder als alle opdrachten in de functie klaar zijn
function preload() {
  imgA = loadImage('plaatjePasen.jpg'); // plaatje laden
  imgB = loadImage('iconTwitter.png');
}

function setup() {
  createCanvas(800,450);
  background('blue');
}

function draw() {
  image(imgA, 0, 0, 800, 450); // groot plaatje afbeelden
  image(imgB, mouseX, mouseY, 50, 50); // klein plaatje bij de muis afbeelden
}