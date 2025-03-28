// const prompt = require('prompt-sync')()


// let user;
// do{
//   user = prompt("Enter username ");
// }
// while (user ===``){
//   console.log("Kindly Enter Your name");
//   user = user.toLowerCase();
// }
// console.log(`Hello ${user}`);


// let age = 19;
// age = Number(age);
// age++;
// console.log(age);
// NewAge = age + 10;
// console.log(NewAge);

// const person1 = {
//   name: "John",
//   age: 30,
// };

// const person2 = person1;

// person2.age = person1.age + 1;
// console.log(person1.age);
// console.log(person2.age);

// let x = -21.4;
// let y = 19;
// const add = () =>{
//   let sum = x + y;
//   console.log(sum);
//   sum = Math.round(sum);
//   console.log(sum);
//   sum = sum.toFixed(2);
//   console.log(sum);
//   sum = sum.toString();
//   console.log(sum);
//   sum = Math.ceil(sum);
//   sum = Math.abs(sum)
//   console.log(sum);
// };
// add();


// let age = 19;
// if (age<= 18){
//   console.log("You are a minor");
// }
// else{
//   console.log("You are an adult");
// }

// let isStudent = false;
// if (!isStudent) {
//   console.log("You are a student");
// }
// else{
//   console.log("You are not a student");
// }

// let age = 18;
// let message = (age >=18)? "You are an adult" : "You are a minor";
// console.log(message);

// let day = prompt("Enter a day (1-7): ");
// day = parseInt(day); // Ensures it's an integer

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day, please enter a number between 1 and 7.");
// }

// let username = "Nextron";
// let password = "123456";
// let isLoginSuccessful = false;
// let logUser;
// let logPass;
// logUser = prompt("Enter your username: ");
// logPass = prompt("Enter your password: ");
// logpass = parseInt(logPass);


// if(logUser === username && logPass === password){
//   isLoginSuccessful = true;
// }

//  if (isLoginSuccessful) {
//   console.log("Login successful");
//  }
//  else {
//   console.log("Login failed");
//  }


// let username = prompt("Enter your name: ");

// username = username.charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);


// let firstName = prompt("Enter your first name: ");
// let lastName = prompt("Enter your last name: ");
// firstName = firstName.trim().charAt(0).toUpperCase()+ firstName.trim().slice(1).toLowerCase();
// lastName = lastName.trim().charAt(0).toUpperCase()+ lastName.trim().slice(1).toLowerCase();
// console.log(`Hello, ${firstName} ${lastName}`);
// let fullName = firstName + " " + lastName;
// console.log(fullName);




// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// for (let i = 0;  i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum += i; // sum = sum + i
// }
// console.log("Total sum:", sum);

// let person = { name: "Alice", age: 25 };
// for (let key in person) {
//     console.log(key, ":", person[key]);
// }

// let user = [
//   { name: "John", age: 30 },
//   { name: "Jane", age: 25 }
// ];

// let user = [
//   {name: "John",age: 30},
//   {name: "Jane",age: 25}
// ];

// for ( let key in user){
//   console.log(key,":", user[key]);
// };
// let score;
// const grader= (score)=>{
// // let score = prompt("Enter your score");
// let letterGrade;
// switch(true){
//   case  score >= 90:
//     letterGrade = "A";
//     break;
//   case score >= 80:
//       letterGrade = "B";
//       break;
//   case score >= 70:
//         letterGrade = "C";
//         break;
//   case score >= 60:
//           letterGrade = "D";
//           break;
// }
// return letterGrade;
// };
// console.log(grader(80));

// function isValid(email){
//   if (email.includes("@") && email.includes ("."))
//     return true;
//   else{
//     return false;
//   }
// }
// console.log(isValid("nex@2.com"));

// let fruits = ["apple", "banana", "cherry"];
// fruits.push("Mango");
// fruits.pop();
// fruits.unshift("Mango")
// console.log(fruits.length);
// console.log(fruits);
// fruits.sort().reverse();

// let numbers = [1,2,3,4,5,6,7,8,9];
// let max = Math.max(...numbers);
// console.log(max);

// console.log(...fruits);

// let join = [...fruits].join("-");
// console.log(join);

// function hello(callback){
//   console.log("GoodMorning");
//   callback();
// }

// function greet(){
//   console.log("GoodEvening");
// }

// hello(greet);

// function sum(callback,x,y){
//   let results = x+y;
//   callback(results);
// }

// function display(results){
//   console.log(results);
// }

// sum(display,2,3);

// let numbers = [1,2,3,4,5,6,7];

// numbers.forEach(display);

// function display(element){
//   console.log(element);
// }

// display(()=>{
//   console.log(element);
// });


// let fruits = ["apple", "banana", "cherry"];
// fruits.forEach(capitalize);

// function capitalize(element,index,array){
//   console.log(array[index]=element.charAt(0).toUpperCase()+ element.slice(1));
// }


//.map method
// let numbers = [1,2,3,4,5];
// const square = numbers.map(squares);
// console.log(square);

// function squares(element){
// return Math.pow(element,2)
// };

//.filter method
//.reduce method

// let numbers = [1,2,3,4,5];
// const prices = numbers.reduce(sum);
// console.log(prices);

// function sum(accumulator, currentElement){
//   return accumulator + currentElement;
// }

// const SchoolName = [
//   {
//   firstName: "John",
//   lastName: "Doe",
//   SchoolName: "Gitungano"
// },
//   {
//     firstName: "Jane",
//     lastName: "Doe",
//     SchoolName: "Gitungano"
//   }
// ]
// console.log(SchoolName[0].firstName);

//Constructor
// function car(model,type,year){
//   this.model= model,
//   this.type = type,
//   this.year = year,
//   this.drive = function(){
//     console.log("Vroom");
//   }
// }

// const car1 =new car("Any","Ford",2025);
// console.log(car1)
// car1.drive();

// class product{
//   constructor(name,price,quantity){
//     this.name= name,
//     this.price=price,
//     this.quantity=quantity
//   }
//   displayproduct(){
//     console.log(this.name,this.price,this.quantity);
//   }
// }
// const product1 = new product("Laptop",1000,5);
// product1.displayproduct();


//Static
// class product {
//   static name = "Laptop";
//   static price = 1000;
//   static quantity = 5;
//   static getPrice(){
//     return product.price*product.quantity;
//   }
// }
// console.log(product.getPrice());

// class Animal{
//   alive = true
// }

// class Rabbit extends Animal{
//   constructor(name,age){
//     super(name,age)
//     this.name= name,
//     this.age = age
    
//   }
// }
// // Rabbit.alive
// const report = new Rabbit("Eliza",1);
// console.log(report);

// class Rectangle{
//   constructor(width,height){
//     this.width = width,
//     this.height=height
//   }
// }

// class Circle {
//   constructor(radius) {
//     this._radius = radius; 
//   }

//   get area() {
//     return Math.PI * this._radius ** 2;
//   }

//   set radius(newRadius) {
//     if (newRadius >= 0) {
//       this._radius = newRadius;
//     } else {
//       console.log("Radius must be positive");
//     }
//   }
// }

// const circle = new Circle(5);
// console.log(circle.area); // 78.54...
// circle.radius = 0; 

// const user = {
//   firstName : "Nextron",
//   lastName: "Manyeki",
//   age: 19,
//   job: "Director",
// }
// function displayPerson({firstName,lastName,age,job}){
//   console.log(firstName);
// }
// displayPerson(user);

// const report = console.log((user.age),(user.firstName),(user.lastName));

// function dashboard(){
//   let user = 0;
// function users(){
//     user++;
//     console.log(user);
//   }
// function land(){
//     console.log("Crash landing Position")
//   }
//   return {users,land};
// }
  
// const myDashBoard = dashboard();
// myDashBoard.users();
// myDashBoard.users();
// myDashBoard.land();

































