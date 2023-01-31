function isVijftig() {
    let getal1 = parseInt(prompt("Geef een random geheel getal in tussen 0 en 100."));
    let getal2 = parseInt(prompt("Geef een random geheel getal in tussen 0 en 100."));
    if ((getal1 === 50 || getal2 === 50) || (getal1 + getal2 === 50)) {
        document.getElementById("uitkomst").innerHTML = "Hoera Vijftig!";
    }
}
isVijftig();