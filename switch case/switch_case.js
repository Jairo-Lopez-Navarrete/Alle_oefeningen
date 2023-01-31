//let sporten = prompt("vind je sporten leuk", "leuk, niet leuk?");
//let uitkomst;
//switch (sporten) {
//    case leuk:
//        uitkomst = "Just Do It.";
//        break;
//    case niet leuk:
//        uitkomst = "Jammer, blijf dan maar liggen.";
//        break;
//    default:
//        uitkomst = "sorry maar je antwoord was onduidelijk.";
//}
//document.getElementById("antwoord").innerHTML = uitkomst;

let koekje = prompt("Wil je een koekje", "Ja, Nee");
let uitkomst;
switch (koekje) {
    case "Ja":
        uitkomst = "Joepie, hier is je koekje!";
        break;
    case "Nee":
        uitkomst = "Oké, hap dan maar wat lucht!";
        break;
    default:
        uitkomst = "Sorry, dat was geen duidelijk antwoord...";
}
document.getElementById(“antwoord”).innerHTML = uitkomst;

