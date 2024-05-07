console.log("GRUNDLAGEN");
console.log("==========");

console.log("Aufgabe 1");
console.log("Erstelle zwei Variablen namens a und b. Initialisiere mit den Werten 1 und 2.");

// Der Wert 1 wird zugewiesen(=) an eine Variable namens a.
let a = 1;
let b = 2;

// Mit dem Plus-Operator findet eine String-Verkettung statt. Ein String ist eine Zeichenkette, eingerahmt
// mit Hochkommas
console.log("Der Wert der Variablen a ist: "+ a)
console.log("Der Wert der Variablen b ist: "+ b)

console.log("Aufgabe 2");
console.log("Gib das Ergebniss der Addition von a und b aus.");

// Wenn links oder rechts vom Plus-Operator ein String steht, wird verkettet.
// Wenn links und rechts Zahlen stehen, wird addiert.
console.log(a+b);
console.log("Das Ergebnis der Addition:", + a + b)

console.log("Aufgabe 3");
console.log("Gib das Ergebnis der Subtraktion, Multiplikation, Division von a und b aus.");

console.log("Subtraktion:", + a -b)
console.log("Multplikation:", + a * b)
console.log("Division:", + a / b)

console.log("Aufgabe 4");
console.log("Der wert von c sei das Ergebnis der Addition von a und b.");

let c = a + b;

console.log("Der Wert von c ist: " + c);

console.log("Aufgabe 5");
console.log("a und b sind die Seitenlängen der Katheten eines rechtwinklingen Dreiecks. Bestimme die länge der Hypotenuse");

// cQuadrat ist in Kamelhöcker-Notation geschrieben. Das heißt: zuerst ein kleinbuchstabe. Verbundene Wörter beginnen groß.
let cQuadrat = a *a + b * b;

// javascript kennt eine Bibliothek namens Math. In der Bibliothek gibt es eine Funktion namens sqrt. Als Parameter in den 
// runden Klammern erwartet sqrt eine Zahl, aus der dann die Wurzel gezogen wird.
c = Math.sqrt(cQuadrat);
console.log("Die Länge der Hypotenuse c beträgt: " + c + " lang ");

console.log("Aufgabe 6");
console.log("Ein Kunde legt 100 euro auf dem sparbuch an. Jedes jahr bekommt er 10% Zinsen. Wie viel bekommt der Kunde nach zwei jahren ausgezahlt.");

let kapital = 100; // Anfangskapital
let zinssatz = 0.1; // Zinssatz (10% entspricht 0.1)
let laufzeit = 2;

// Berechnung des Betrags nach einem Jahr
let nachEinemJahr = kapital * (1 + zinssatz);

// Berechnung des Betrags nach zwei Jahren
let nachZweiJahren = nachEinemJahr * (1 + zinssatz);

console.log("Nach zwei Jahren bekommt der Kunde " + nachZweiJahren + " Euro ausgezahlt.");

let endkapital = Math.pow ((kapital * zinssatz), laufzeit);

