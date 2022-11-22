const prompt=require("prompt-sync")({sigint:true});
var num=parseInt(prompt("Enter The Number "));
if(num==1){
    console.log("SUNDAY");
}
if(num==2){
    console.log("MONDAY");
}
if(num==3){
    console.log("TUESDAY");
}
if(num==4){
    console.log("WED");
}
if(num==5){
    console.log("THU");
}
if(num==6){
    console.log("FRIDAY");
}
if(num==7){
    console.log("SATU");
}
if(num > 7 || num < 1){
    console.log("Invalid Input");
}