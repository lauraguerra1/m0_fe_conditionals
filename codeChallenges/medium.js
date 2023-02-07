var goodDrivingRecord = true; 
var age = 24; 

if (goodDrivingRecord === true && age >= 25) {
    console.log("You will receive a discount on the rental car");
} else if (goodDrivingRecord === true || age >= 25){
    console.log("You will pay full price for the rental car");
} else if (goodDrivingRecord === false && age < 25) {
    console.log("You will need someone else to sign for the rental car");
}