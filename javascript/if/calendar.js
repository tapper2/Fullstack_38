var day = +prompt("Enter day : ");
var month = +prompt("Enter month : ");


if(day+7>30){
    // month = month+1;
    // month++;
    day = (day+7) -30;
    month += 1; 
    alert(day + "/" + month  )
}else {
    alert((day+7) + "/" + month)
}