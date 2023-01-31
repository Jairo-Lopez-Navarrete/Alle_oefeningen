let getal = parseInt (prompt("random getal"));


if (getal > 50){
    document.getElementById("uitkomst").innerText = "te hoog";
}

else if (getal === 50){
    document.getElementById("uitkomst").innerText = "proficiat, goed gegokt";
}

else {
    document.getElementById("uitkomst").innerText = "te laag (of onbekend)";
}
