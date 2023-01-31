let huidigeDag = new Date().getDay();
let dag;
let uur = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();
let naam = prompt("Voer uw naam in:")

huidigeTijd = uur + ":" + min /*+ ":" + sec*/ ;

switch (huidigeDag) {
    case 0:
        dag = "zondag";
        break;
    case 1:
        dag = "maandag";
        break;
    case 2:
        dag = "dinsdag";
        break;
    case 3:
        dag = "woensdag";
        break;
    case 4:
        dag = "donderdag";
        break;
    case 5:
        dag = "vrijdag";
        break;
    case 6:
        dag = "zaterdag";
}

if (uur >= 7 && uur < 12) {
    document.getElementById("tekst").innerHTML = "Goedemorgen " + naam + " vanadaag is het " + dag + " en de tijd is: " + huidigeTijd;
} else if (uur >= 12 && uur < 18) {
    document.getElementById("tekst").innerHTML = "Goede dag " + naam + "  vanadaag is het " + dag + " en de tijd is: " + huidigeTijd;
} else {
    document.getElementById("tekst").innerHTML = "Goede avond " + naam + "  vanadaag is het " + dag + " en de tijd is: " + huidigeTijd;
}