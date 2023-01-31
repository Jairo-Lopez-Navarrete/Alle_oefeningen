function calculate_age(){
    var birthdate = new Date(document.getElementById("birthdate").value);
    var birthdate_year = birthdate.getFullYear();
    var birthdate_month = birthdate.getMonth();
    var birthdate_day = birthdate.getDate();

    var output_value = birthdate_day;
    document.getElementById("calculated_age").innerHTML = output_value;
}

if (output_value <= 20){
    alert("je bent oud genoeg om deze website te bezoeken");
}