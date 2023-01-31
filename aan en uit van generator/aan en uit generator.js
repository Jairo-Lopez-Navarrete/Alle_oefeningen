/*function changePowerTotal(total, ID, status, power){
    if (status === "on"){
        for (power = 0; power <= total; power++);
        alert("Generator #" + ID + " is now " + status + ", adding " + power + " MW, for a total of " + total + " MW!");
    }
    else if (status === "off"){
        for (power = 100; power >= total; power--);
        alert("Generator #" + ID + " is now " + status + ", removing " + power + " MW, for a total of " + total + " MW!");
    }
    return total;
}
 */


function changePowerTotal(total, ID, status, power) {
    if (status == "on") {
        total += power;
        alert("Generator #" + ID + " is now " + status + ", adding " + power + " MW, for a total of " + total + " MW!");
    } else if (status == "off") {
        total -= power;
        alert("Generator #" + ID + " is now " + status + ", removing " + power + " MW, for a total of " + total + " MW!");
    }
    return total;
}
