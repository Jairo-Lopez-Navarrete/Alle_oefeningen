let object = {
    Lengte: "1.75m",
    Gewicht: "69kg",
    Leeftijd: "21",
    Huidskleur: "blank",
    Oogkleur: "groen"
};

const loop = {
    Lengte: "1.75m", Gewicht: "69kg", Leeftijd: "21", Huidskleur: "blank", Oogkleur: "groen"};
for (key in loop) console.log(loop[key]);

let array = [];
for (key in object) {
    array.push([key, object[key]])
};
console.log(array);