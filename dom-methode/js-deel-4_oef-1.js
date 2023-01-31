//Pas de tekstkleur van de paragraaf met de id ‘red’ aan naar donkerrood.
document.getElementById("red").style.color = "darkred";

// Verwijder de paragraaf met de id ‘weg’.
let weg = document.getElementById("main");
let paragraaf = weg.querySelectorAll("p:last-child")[0];
weg.removeChild(paragraaf);
// dit werkt maar is niet future proof

let parentMain = document.getElementById("main");
let childWeg = document.getElementById("weg");
parentMain.removeChild(childWeg);

//Voeg een hoofding van niveau 1 toe in de header van de webpagina met de tekst‘Welkom PandiX’.
let nieuweParagraaf = document.createElement("h1");
nieuweParagraaf.id = "tekst";
let tekstParagraaf = document.createTextNode("Welkom PandiX");
nieuweParagraaf.appendChild(tekstParagraaf);

document.getElementById("header").insertBefore(nieuweParagraaf, document.getElementById("tekst"));


// Voeg een aside toe in de main met de adresgegevens van Hogeschool PXL.
let nieuweAside = document.createElement("aside");
nieuweAside.id = "aside";
let nieuweParagraaf1 = document.createElement("p");
nieuweAside.appendChild(nieuweParagraaf1);
let tekstParagraaf1 = document.createTextNode("© Hogeschool PXL Elfde-Liniestraat 24 B-3500 HASSELT tel. +32 11 77 55 55 pxl@pxl.be");
nieuweParagraaf1.appendChild(tekstParagraaf1);

document.getElementById("main").insertBefore(nieuweAside, document.getElementById("aside"));

document.getElementsByTagName("h1")[0].style.color = "darkgreen"
document.getElementsByTagName("h1")[0].style.textDecoration = "underline"
document.getElementsByTagName("h1")[0].style.fontWeight = "bold"
document.getElementsByTagName("h1")[0].style.fontFamily = "Arial, Verdana, sans-serif"
document.getElementsByTagName("h1")[0].style.fontStyle = "italic"