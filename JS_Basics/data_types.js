var age = 18;                           // number 
var name = "Jane";                      // string
var name = {first: "Jane", last: "Doe"};  // object
var truth = false;                      // boolean
var sheets = ["HTML", "CSS", "JS"];       // array
var a; typeof a;                        // undefined
var a = null;                           // value null
// Objects
var student = {                 // object name
firstName: "Jane",           // list of properties and values
lastName: "Doe",
age: 18,
height: 170,
fullName: function() {     // object function
   return this.firstName + " " + this.lastName;
}
}; 
student.age = 19;           // setting value
student[age]++;             // incrementing
studentName = student.fullName();  // call object function
console.log(studentName);