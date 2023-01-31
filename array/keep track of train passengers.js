passengerList = ["gregg pollack", "ashley smith", "jon friskid"];

passengerList = addPassenger("Adam Rensel", passengerList);

passengerList = addPassenger("Jennifer Borders", passengerList);

function addPassenger (name, list){
    if(list.length == 0){
        list.push(name);
        return list;
    } else{
        for(let i = 0; i < list.length; i++){
            if (list[i] == undefined){
                list[i] = name;
                return list;
            } else if (i == list.length - 1){
                console.log("passenger not found!");
            }
        }
    }
    return list;
}

console.log(addPassenger);