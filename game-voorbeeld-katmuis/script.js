/* Game opdracht - KatMuis voorbeeld game
   Versie 20190407GEE, voor Emmauscollege Rotterdam
   Dit voorbeeld laat zien hoe je een uitleg scherm, levels en game-over kunt maken.
   Opdracht: maak zelf de code die je punten bijhoudt en afdrukt, hoe langer je speelt hoe meer punten
*/

/* globale variabelen die je gebruikt in je game
   */
console.log("start variabelen declareren"); // berichtje voor debuggen


var spelStatus = "starten"; // spelStatus kan zijn: "starten", "spelen", "einde"

/* functies die je gebruikt in je game
   */
var wisScherm = function () {
  fill("blue");
  rect(0, 0, 800, 450);
  fill("white");
  textSize(40);
}

var tekenStartscherm = function () {
  wisScherm();
  text("Zoek de kat door met je muis te bewegen", 50, 50);
  text("Klik met de muis om verder te gaan", 50, 100);
}

var tekenEindscherm = function () {
  wisScherm();
  text("Game over, je bent opgegeten!", 50, 400);
}

var spelLoop = function () {
  wisScherm();
  text("Kat", 200, 200)
  text("Muis", mouseX, mouseY);
  if (mouseX > 120 && mouseX < 250 && mouseY > 160 && mouseY < 240) {
    debugger;
    return "af"; // Muis raakt kat, einde spel
  } else {
    return "verder";
  }
}

/* setup
   de code in deze functie wordt één keer uitgevoerd door de p5 library, 
   zodra het spel geladen is in de browser
   */
function setup() {
  createCanvas(800, 450); // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  background("blue"); // Kleur de achtergrond blauw, zodat je het kunt zien
  console.log("setup klaar"); // berichtje voor debuggen
}

/* draw
   de code in deze functie wordt meerdere keren per seconde uitgevoerd door de p5 library, 
   nadat de setup functie klaar is
   */
function draw() {
  console.log("start draw"); // berichtje voor debuggen

  if (spelStatus === "starten") {
    tekenStartscherm();
    if (mouseIsPressed) {
      spelStatus = "spelen";
    }
  }
  if (spelStatus === "spelen") {
    // doe 1 stapje van het spel en 
    // ga naar einde als af
    if (spelLoop() === "af") {
      spelStatus = "einde";
    }
  }
  if (spelStatus === "einde") {
    tekenEindscherm();
    if (mouseIsPressed) {
      spelStatus = "starten";
    }
  }
}