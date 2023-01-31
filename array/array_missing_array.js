let numberlist = [2, 5, 8, 4, 7, 12, 6, 9, 3, 11];

let evenCount = 0;
for(let i = 0; i < numberList.length; i++){
    if (numberList[i] % 2 == 0){
        evencount++;
    } else{
        numberList[i] = undefined;
    }
}
console.log(evenCount);