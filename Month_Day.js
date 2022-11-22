const prompt=require("prompt-sync")({sigint:true});
var month=parseInt(prompt("Enter Month in Number"));
var date=parseInt(prompt("Enter Date in Number"));

if (month >= 3 && month < 7){
    if(month==3 && date >= 20 ){
        console.log(true);
    }
    else if(month ==6 && date < 21){
        console.log(true);
    }
    else if(month==4 || month==5){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
else{
    console.log(false);
}