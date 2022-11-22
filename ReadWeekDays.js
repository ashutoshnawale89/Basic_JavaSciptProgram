const prompt=require("prompt-sync")({sigint:true});
var num=parseInt(prompt("Enter The Number in Single Digit WEEKDAYS"));

switch (num) {
    case(1): console.log("SUN");
    break;
    case(2): console.log("MON");
    break;
    case(3): console.log("TUE");
    break;
    case(4): console.log("WED");
    break;
    case(5): console.log("THU");
    break;
    case(6):console.log("FRI");
    break;
    case(7): console.log("SAT");
    break;
    default:console.log("Enter Valid Input");
}