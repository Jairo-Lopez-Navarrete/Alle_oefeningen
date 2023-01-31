let koekje = prompt("Wil je een koekje", "Ja, Nee");
let uitkomst;
switch (koekje.toUpperCase()) {
    case "JA":
        uitkomst = "Joepie, hier is je koekje!";
        break;
    case "NEE":
        uitkomst = "Oké, hap dan maar wat lucht!";
        break;
    default:
        uitkomst = "Sorry, dat was geen duidelijk antwoord...";
}
document.getElementById(“antwoord”).innerHTML = uitkomst;