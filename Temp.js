const prompt=require("prompt-sync")({sigint:true});

function temp(){
console.log("Enter 1: deg-C To deg-F"+" "+"Enter 2: deg-F To deg-C");
var degree=parseInt(prompt("Enter 1: deg-C To deg-F  &&  Enter 2: deg-F To deg-C   "));
if(degree==1){
    var deg=parseInt(prompt("Enter The Value"));
    deg=deg*(9/5)+32;
    console.log(deg+" F");
}
else if(degree==2){
    var deg=parseInt(prompt("Enter The Value"));
    deg=(deg-32)*(5/9);
    console.log(deg+" C");
}
else {
    console.log("Enter Valid Input");
}
}
temp();