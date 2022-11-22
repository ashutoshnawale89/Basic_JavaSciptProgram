const prompt=require("prompt-sync")({sigint:true});
var num=parseInt(prompt("Enter The Number in 10 Digit Format"));

switch (num) {
    case(10): console.log("TEN");
    break;
    case(100): console.log("HUNDREAD");
    break;
    case(1000): console.log("THOUSAND");
    break;
    case(10000): console.log("TEN THOUSAND");
    break;
    case(100000): console.log("ONE LAKH");
    break;
    case(1000000):console.log("TEN LAKH");
    break;
    case(10000000): console.log("ONE CRORE");
    break;
    case(100000000): console.log("TEN CRORE");
    break;
    default:console.log("Enter Valid Input");
}