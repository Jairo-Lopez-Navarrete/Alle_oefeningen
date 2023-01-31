let getalEen = prompt("Geef een geheel getal");
let getalTwee = prompt("Geef een tweede geheel getal");

let uitkomst1 = parseFloat(getalEen) * parseFloat(getalTwee);
let uitkomst2 = parseFloat(getalEen) + parseFloat(getalTwee);
let uitkomst3 = parseFloat(getalEen) - parseFloat(getalTwee);
let uitkomst4 = parseFloat(getalEen) / parseFloat(getalTwee);

document.getElementById("getal").innerHTML = "De ingevoerde getallen zijn: " + getalEen + " en " + getalTwee;

document.getElementById("wisk1").innerHTML = getalEen + " maal " + getalTwee + " is: " + uitkomst1;
document.getElementById("wisk2").innerHTML = getalEen + " plus " + getalTwee + " is: " + uitkomst2;
document.getElementById("wisk3").innerHTML = getalEen + " min " + getalTwee + " is: " + uitkomst3;
document.getElementById("wisk4").innerHTML = getalEen + " gedeeld door " + getalTwee + " is: " + uitkomst4;



let zin1 = prompt("Geef een zin:");
let zin2 = prompt("Geef een tweede zin:");

document.getElementById("tekst1").innerHTML = "Eerste zin: " + zin1;
document.getElementById("tekst2").innerHTML = "Tweede zin: " + zin2;
document.getElementById("uitkomst").innerHTML = zin1 + " " + zin2;

let word1 = prompt("Geef een woord:");
let word2 = prompt("Geef een tweede woord:");

document.getElementById("woord1").innerHTML = word1;
document.getElementById("woord2").innerHTML = word2;
document.getElementById("verg").innerHTML = word1 === word2;