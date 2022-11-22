const prompt=require("prompt-sync")({sigint:true});
var a=parseInt(prompt("Enter 1st Value"));
var b=parseInt(prompt("Enter 2nd Value"));
var c=parseInt(prompt("Enter 3rd Value"));

var num1=a+b*c;
var num2=c+a/b;
var num3=a%b+c;
var num4=a*b+c;

var result1;
var result2;
var result3;
var result4;
 // compare First Two 
if (num1 > num2){
    result1=num2;
    result3=num1;
}
else {
    result1=num1; 
    result3=num2;
}
// Compare Next Two
if (num3 > num4){
    result2=num4;
    result4=num3;
}
else {
    result2=num3; 
    result4=num4;
}
// Comapre Maximum and Minimum Value 

// minimum value
if(result1 > result2){
    console.log("Minimum Value Is :"+result2);
}
else {
    console.log("Minimum Value Is :"+result1);
}

// maximum Value
if(result3 > result4){
    console.log("Maximum Value Is :"+result3);
}
else {
    console.log("Maximum Value Is :"+result4);
}

