let maand;
switch (new Date().getMonth()) {
    case 0:
        maand = "december";
        break;
    case 1:
        maand = "januari";
        break;
    case 2:
        maand = "februari";
        break;
    case 3:
        maand = "maart";
        break;
    case 4:
        maand = "april";
        break;
    case 5:
        maand = "mei";
        break;
    case 6:
        maand = "juni";
        break;
    case 7:
        maand = "juli";
        break;
    case 8:
        maand = "augustus";
        break;
    case 9:
        maand = "september";
        break;
    case 10:
        maand = "oktober";
        break;
    case 11:
        maand = "november";
}
console.log("we zijn in de maand" + " " + maand + ".");