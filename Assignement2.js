"use strict";
var cel = 26;
var fahrenheit = (cel * 9 / 5) + 32;
console.log(fahrenheit);
cel = (fahrenheit - 32) * .5555;
console.log("Celcius is " + cel);
// Write a program that calculates the percentage.
var book1 = 45;
var book2 = 78;
var book3 = 70;
var totalBooks = (book1 + book2 + book3) / 3;
console.log(totalBooks);
//Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days
let totalDays = 200;
let week = totalDays / 7;
let day = totalDays % 7;
console.log(week);
console.log(day);
/*Write a program that calculates the discount for a product based on its price.
If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.*/
var price = 10;
if (price > 100) {
    var discount = price - (price / 100 * 10);
    console.log(discount);
}
else {
    var discount = price - (price / 100 * 5);
    console.log(discount);
}
/*Create a program that determines the category of a user-provided age.
 If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager.
 " Otherwise, print "Adult."*/
var age = Number(prompt("what is your age"));
if (age <= 12) {
    console.log("Child");
}
else if (age > 12 && age <= 19) {
    console.log("Teenager");
}
else {
    console.log("Adult");
}
