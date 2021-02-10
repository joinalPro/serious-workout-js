function inchToFeet (inch){
    var feet = inch /12;
    return feet;
}

var senior = [131,288];
var dadaFeet = inchToFeet(senior[0]);
console.log(dadaFeet);
var dadiFeet = inchToFeet(288);
console.log(dadiFeet);
