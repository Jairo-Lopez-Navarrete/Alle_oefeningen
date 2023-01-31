let klanten = [
    {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
    {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
    {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
    {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
    {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'},
];


var newArray = klanten.filter(function(locatie){
    return locatie.stad === "Genk"
    });
console.log(newArray);
function getCounts(string) {
    let histogram = {};

    for (let i = 0; i < klanten.length; i++) {
        let ch = klanten[i];
        if (!histogram[ch]) {
            histogram[ch]= 0;
        }
        histogram[ch]++;
    }
    return histogram;
}

console.log(getCounts(klanten.naam));
function repeatString(str, num) {
    if (num < 0) return "";
    return str.repeat(num);
}

repeatString("abc",3);

console.log(" antwerpen.".repeat(3));



//const woonplaats = klanten.filter(stad => stad.naam === genk);
//console.log(woonplaats);
//let woorden = str.split(' ')
//console.log(woorden.length);
//function teller = ()