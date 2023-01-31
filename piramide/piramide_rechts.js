// let n = 7;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//         string += "#";
//     }
//     string += "<br>";
// }
// document.getElementById("tekst").innerHTML = string;


let aantalLijnen = 7
let uitkomst = "";

for (let teller = 0; teller < aantalLijnen; teller++) {
    for (let teller2 = 0; teller2 < teller; teller2++) {
        uitkomst = uitkomst + "#";
    }
    uitkomst = uitkomst + "\n";

}
console.log(uitkomst);