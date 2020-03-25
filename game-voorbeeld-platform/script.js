/* Game opdracht - Platform voorbeeld game
   Versie 20190407GEE, voor Emmauscollege Rotterdam
   Dit voorbeeld is eenvoudig om te bouwen tot een pacman achttig game: verwijder vallen en zorg dat je ook omhoog en omlaag kunt
*/

/* globale variabelen die je gebruikt in je game
   */
console.log("start variabelen declareren"); // berichtje voor debuggen

// array[rij][kolom] met het veld erin
// rij+1 is omlaag, kolom+1 is naar recht
// let op: als je indices gebruikt die groter zijn de de array, dan kan je game onverwacht stoppen, omdat je de computer opdracht geeft de kijken naar iets dat hij niet kent. In dit voorbeeld is de rand daarom van steen.
var veld = [["steen","lucht", "steen", "steen", "steen", "steen", "steen", "steen"],
            ["steen","lucht", "lucht", "steen", "steen", "steen", "steen", "steen"],
            ["steen","steen", "lucht", "lucht", "lucht", "steen", "steen", "steen"],
            ["steen","lucht", "lucht", "lucht", "lucht", "lucht", "lucht", "steen"],
            ["steen","steen", "steen", "steen", "steen", "steen", "steen", "steen"]];

var spelerKolom = 1; // horizontale positie van speler
var spelerRij = 0; // verticale positie van speler

/* functies die je gebruikt in je game
   */
var tekenAchtergrond = function() {
  // wis alles
  fill("Blue");
  rect(0, 0, 800, 450);
  
  // toon uitleg
  fill("Yellow");
  textSize(20);
  if (!focused) { // het toetsbord is verbonden met het window dat de focus heeft 
    text("Klik op het speelveld om de toetsen te kunnen gebruiken", 50, 400);
  } else {
    text("Gebruik de toetsen links en rechts om te lopen", 50, 400);
  }
}

var tekenCell = function(kolom, rij) {
  if (veld[rij][kolom] === "steen") {
    fill("Brown");
  }
  if (veld[rij][kolom] === "lucht") {
    fill("LightSkyBlue");
  }
  rect(kolom * 100, rij * 50, 100, 50);
}

var tekenSpeler = function(kolom, rij) {
  fill("Yellow");
  ellipse(kolom * 100 + 50, rij * 50 + 25, 40, 20);
}

/* setup
   de code in deze functie wordt één keer uitgevoerd door de p5 library, 
   zodra het spel geladen is in de browser
   */
function setup() {
  createCanvas(800, 450); // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  background("blue"); // Kleur de achtergrond blauw, zodat je het kunt zien
  frameRate(10); // aantal keren per seconde dat draw wordt aangeroepen, dit staat meestal standaard op 60, een kleiner getal maakt het hele spelletje langzamer
  console.log("setup klaar"); // berichtje voor debuggen
}

/* draw
   de code in deze functie wordt meerdere keren per seconde uitgevoerd door de p5 library, 
   nadat de setup functie klaar is
   */
function draw() {
  console.log("start draw"); // berichtje voor debuggen

  /* teken het speelveld, gebruik de globale variabelen
   */
  // achtergrond
  tekenAchtergrond();

  // veld
  for (var kolom = 0; kolom < 8; kolom = kolom + 1) {
    for (var rij = 0; rij < 5; rij = rij + 1) {
      tekenCell(kolom, rij);
    }
  }

  // speler
  tekenSpeler(spelerKolom, spelerRij);

  /* verwerk een stap in de tijd: 
     pas de waarden van de globale variabelen aan
   */
  // vallen
  if (veld[spelerRij + 1][spelerKolom] === "lucht") {
    spelerRij = spelerRij + 1;
  }

  /* verwerk invoer van toetsenbord / muis / touchscreen:
     pas de waarden van de globale variabelen aan
    */

  // speler naar links of rechts
  if (keyIsPressed) {
    if (keyCode === RIGHT_ARROW &&
      veld[spelerRij][spelerKolom + 1] === "lucht") {
      spelerKolom = spelerKolom + 1;
    }
    if (keyCode === LEFT_ARROW &&
      veld[spelerRij][spelerKolom - 1] === "lucht") {
      spelerKolom = spelerKolom - 1;
    }
  }

  /* controlleer of het spel klaar is
   */
  // het spel blijft nu altijd doorgaan
  // vraag: Wanneer zou het spel moeten stoppen? 
}
