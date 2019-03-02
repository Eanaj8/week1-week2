function myFunction() {

let text = "";    
let i = 0;

do{
    text += "<br>Janae\s favorite number is " + i;
    i++;
}
while (i < 19);
document.getElementById("demo").innerHTML = text;
}