const prompt=require("prompt-sync")({sigint:true});
var num=parseInt(prompt("Enter  Number  "));
var value=2;
for(var i=0; i < num;i++){
    for(var j=1;j <= i;j++){
        value=value*2;
    }
    console.log(value);
    value=2;
    }