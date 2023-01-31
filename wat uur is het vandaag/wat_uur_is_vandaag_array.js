const dt = new Date();

let hour = dt.getHours();
console.log(hour);       //1:00pn

let minutes = dt.getMinutes();
console.log(minutes);
//console.log(minutes);

let prepend = hour >= 12?"PM":"AM";

// console.log(prepend);

let user = "Daily";

// if elseif
if(hour > 12 && hour < 17){ //17 = 5:00
    console.log(`Good Afternoon ${user}`);
}
else if(hour >= 17 && hour <= 20){
    console.log(`Good evening ${user}`);
}
else if(hour >= 20||hour <= 6){
    console.log(`Good night ${user}`);
}
else {
    console.log(`Good Morning ${user}`);
}

console.log(`Current Time:-${hour}:${minutes}${prepend}`);
