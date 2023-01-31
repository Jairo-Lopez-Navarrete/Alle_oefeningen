var start = '{"favColor":"orange", "favSeason":"Fall"}';

var myObject = JSON.parse(start);
console.log(myObject);

var myString = JSON.stringify(myObject);
console.log(myString);

var myString = JSON.stringify(myString);
console.log(myObject);