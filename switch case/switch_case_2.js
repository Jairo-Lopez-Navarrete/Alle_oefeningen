let sporten = prompt("vind je sporten leuk", "ja, nee");
let uitkomst;
switch (sporten) {
    case ja:
        uitkomst = ("Just Do It.");
        break;
    case nee:
        uitkomst = ("Jammer, blijf dan maar liggen.");
        break;
    default:
        uitkomst = ("antwoord was onduidelijk, antwoord je vanuit je luie zetel?");
}
document.getElementById("antwoord").innerHTML = uitkomst;