// let n = parseInt(prompt("Geef een getal tussen 1 en 10"))

// if (n <= 0) {
//     alert("Niet mogelijk kies een getal groter dan 0");
// } else if (n > 10) {
//     alert("Niet mogelijk kies een getal kleiner of gelijk aan 10");
// } else {
//     let string = "";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 0; j < i; j++) {
//             string += "#";
//         }
//         string += "<br>";
//     }
//     document.getElementById("tekst").innerHTML = string;
// }


// let string = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//         string += "#";
//     }
//     string += "<br>";
// }
// document.getElementById("tekst").innerHTML = string;



let aantalLijnen = parseInt(prompt("Geef een getal tussen 1 en 10"))
let uikomst = "";

if (aantalLijnen <= 0) {
    alert("Niet mogelijk kies een getal groter dan 0");
} else if (aantalLijnen > 10) {
    alert("Niet mogelijk kies een getal kleiner of gelijk aan 10");
} else {
    for (let teller = 0; teller < aantalLijnen; teller++) {
        for (let teller2 = 0; teller2 < teller; teller2++) {
            uitkomst = uitkomst + "#";
        }
        uitkomst = uitkomst + "\n";
    }
    console.log(uitkomst)
}