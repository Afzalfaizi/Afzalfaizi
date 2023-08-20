// IN This class we are learing array
// how to use array
var studentsRollNo:number[] = [1,2,3,4,5,6,7,8,9,10]
var studentsName:string[] = [ "naveed", "zain","noman","faizi", "shahid"]
console.log(studentsRollNo[1]);
console.log(studentsName[2]);
studentsRollNo[2] = 5
console.log(studentsRollNo[2]);
console.log(studentsName);
console.log(studentsRollNo);
 

var studentsName:string[] = [ "naveed", "zain","noman","faizi", "shahid"];
studentsName.push("hamza");     
studentsName.splice(1,1);   
studentsName.pop();
console.log(studentsName)
// write a programm having an array of todos if the todos are in odd delete on from the center of array,
// otherwise remove two todos from the center of the array.