console.log("hello");
var min=100;
var max=999;
var a=Math.floor(Math.random() * (max - min) ) + min;
var b=Math.floor(Math.random() * (max - min) ) + min;
var c=Math.floor(Math.random() * (max - min) ) + min;
var d=Math.floor(Math.random() * (max - min) ) + min;
var e=Math.floor(Math.random() * (max - min) ) + min;
console.log(a+" "+b+" "+c+" "+d+" "+e);
var num1;
var num2;
// For Minimum Value
if (a > b){
    if(b>c){
        num1=c;
    }
    else if(c > b){
        num1=b;
    }
}
else if(a < b){
    if(a > c){
        num1=c;
    }
    else if(a < c){
        num1=a;
    }
}
if(d > e){
    num2=e;
}
else {
    num2=d;
}
if (num1 > num2){
    console.log("The Minimum Value Is "+num2);
}
else {
    console.log("The Minimum Value Is "+num1);
}

// for Maximum Value

if (a < b){
    if(b<c){
        num1=c;
    }
    else if(c < b){
        num1=b;
    }
}
else if(a > b){
    if(a < c){
        num1=c;
    }
    else if(a > c){
        num1=a;
    }
}
if(d < e){
    num2=e;
}
else {
    num2=d;
}
if (num1 < num2){
    console.log("The Maximum Value Is "+num2);
}
else {
    console.log("The Maximum Value Is "+num1);
}

