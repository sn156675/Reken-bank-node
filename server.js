/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
 
'use strict';
 
const express = require('express');
 
// Constants
//die Anweisungen werden von oben nach unten abgearbeitet. Der Wert 3000 wird von rechts nach links zugewiesen an die konstante namens PORT. Das einfache gleichheitszeichen lässt sich also übersetzen mit "...wird zugewiesen"
const PORT = 3000;
const HOST = '0.0.0.0';
 
// App
const app = express();
app.get('/', (req, res) => {
    //res ist die Antwort des Servers an den Browers
    //send() ist die Anweisung etwas an den browser zu senden
    //`hello...´ ist der Wert, der an die Anweisung send() übergeben wird
   // res.send('Hello remote world!\n');

    //Das res.Objekt kann noch mehr als nur eine Zeichenkette an den
    //Browser zu senden. Das res.Objekt kann mit der Funktion render()
    //eine html-datei an den browser senden.
    res.render('index.ejs',{});
});
 
 
app.listen(PORT, HOST);
 
//mit der Anweisung console.log wird im server administrator auf der
 //Konsole angezeigt, was der server macht. Der Programmierer schreibt dazu
  //in die runde Klammern den ausdruck der auf der Konsole angezeigt 
  //werden soll. die werte der beiden konstanten HOST und PORT werden in den
   //Ausdruck übergegeben ein Verb mit anschließenden runden Klammern steht immer für eine Anweisung etwas zu tun--!>
console.log(`Running on http://${HOST}:${PORT}`);

require('./uebungen/01-grundlagen.js');