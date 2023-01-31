let fruits = ['apple', 'grape'];
fruits.push('banana');
let extractFruit = function(parameter){
    return parameter.shift();
}
console.log(extractFruit(fruits));