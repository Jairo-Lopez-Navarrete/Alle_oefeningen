let getalEen = prompt("Geef een geheel getal");
let getalTwee = prompt("Geef een tweede geheel getal");

let uitkomst1 = parseFloat(getalEen) * parseFloat(getalTwee);
let uitkomst2 = parseFloat(getalEen) + parseFloat(getalTwee);
let uitkomst3 = parseFloat(getalEen) - parseFloat(getalTwee);
let uitkomst4 = parseFloat(getalEen) / parseFloat(getalTwee);


document.getElementById("tekst1").innerHTML = "De uitkomst van de vemenigvuldiging is: " + uitkomst1;
document.getElementById("tekst2").innerHTML = "De uitkomst van de optelling is: " + uitkomst2;
document.getElementById("tekst3").innerHTML = "De uitkomst van de aftrekking is: " + uitkomst3;
document.getElementById("tekst4").innerHTML = "De uitkomst van de deling is: " + uitkomst4;