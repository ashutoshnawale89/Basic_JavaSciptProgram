const prompt=require("prompt-sync")({sigint:true});
var num=parseInt(prompt("Enter  Number  "));
var value=2;
var i=0;
while( i < num){
    var j=1
    while(j <= i){
        value=value*2;
        j++;
    }
    console.log(value);
    value=2;
    i++;
    }