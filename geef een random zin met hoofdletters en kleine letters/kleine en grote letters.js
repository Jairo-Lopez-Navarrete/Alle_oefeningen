function evenOneven() {
    let randomzin = prompt("Geef een random zin in van meer dan 5 woorden!");
    aantalWoorden = randomzin.split(' ');
    let nieuwezin = "";

    for (let teller = 0; teller < aantalWoorden.length; teller++){
            let aangepastWoord = aantalWoorden[teller];
            if (teller % 2 === 0){
                aangepastWoord = aangepastWoord.charAt(0).toUpperCase() + aangepastWoord.slice(1, aangepastWoord.length -1).toLowerCase() + aangepastWoord.charAt(aangepastWoord.length - 1).toUpperCase();
            }
            nieuwezin += aangepastWoord  + " ";
        }
        alert(nieuwezin);
    }
evenOneven();
