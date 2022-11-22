const prompt=require("prompt-sync")({sigint:true});
console.log("1. Feet to Inch");
console.log("2. Inch to Feet");
console.log("3. Feet to Meter");
console.log("4. Meter to Feet");
var num=parseInt(prompt("Enter The Number   "));
var unit=parseInt(prompt("Enter The Which Number Convert   "));
switch (num) {
    case(1): console.log(unit*12+" Inch");
    break;
    case(2): console.log(unit/12+" Feet");
    break;
    case(3): console.log( unit/3.33+" Meter");
    break;
    case(4): console.log(unit*3.33+"  Feet");
    break; 
    default: console.log("Enter Valid Input");
}