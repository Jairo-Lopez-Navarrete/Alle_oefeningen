// let rows = parseInt(prompt("Geef een getal tussen 1 en 10"));

// if (rows <= 0) {
//     alert("Niet mogelijk kies een getal groter dan 0");
// } else if (rows > 10) {
//     alert("Niet mogelijk kies een getal kleiner of gelijk aan 10");
// } else {
//     let string = "";
//     for (let i = 1; i <= rows; i++) {
//         for (var k = 1; k <= (rows - i); k++) {
//             string = "&nbsp;";
//         };
//         for (let j = 1; j <= i; j++) {
//             string += j;
//         }
//         string += "<br>";
//         document.getElementById("tekst").innerHTML = string;
//     }

// }


// var rows = 5;
// for (var i = 1; i <= rows; i++) {
//     for (var k = 1; k <= (rows - i); k++) {
//         document.write(" ");
//     }
//     for (var j = 1; j <= i; j++) {
//         document.write("* ");
//     }
//     document.write("<br>");
// }

let aantalLijnen = 7;
for (let teller = 0; teller < aantalLijnen; teller++) {
    let uitkomst = "";
    for (let teller2 = 1; teller2 < aantalLijnen - teller; teller2++) {
        uitkomst = uitkomst + " ";
    }
    for (let teller3 = 1; teller3 <= (2 * teller + 1); teller3++) {
        uitkomst = uitkomst + "#";
    }
    console.log(uitkomst);
}