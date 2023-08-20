"use strict";
// finding the area of rectangle
var len = 20;
var wid = 30;
var area = len * wid;
console.log("The Area of rectangle is:" + area);
//Write a program that takes input and calculates the volume of a cube.
var a = 10;
var volume = a * a * a;
console.log("the volume of cube is:" + volume);
//Write a program that checks if a given number is positive, negative, or zero.
var num = 0;
if (num > 0) {
    console.log("number is positive");
}
else if (num < 0) {
    console.log('Number is Negative');
}
else {
    console.log("the number is zero");
}
//Write a program that checks if a given number is even or odd.
var num1 = 4;
if (num1 % 2 == 0) {
    console.log("the number is even");
}
else {
    console.log("the number odd");
}
// eligible for vote
var age = 17;
if (age <= 18) {
    console.log("Eligible for Vote");
}
else {
    console.log("Not Eligible For Vote");
}
console.log(((10 + 5) * (3 - 2) / (4 % 3) - 7));
