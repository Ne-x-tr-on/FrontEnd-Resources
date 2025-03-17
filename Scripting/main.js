// functions

// Argument they are passed in the function
// function mclass(theclass){
//   // console.log(`You are in the ${theclass} class`);
// }

// mclass("8"); //Argument passed to the function


// function add(x,y){
//   let result = x+y;
//   return result;
// }

// let answer = add(2,3);
// // console.log(answer); //Answer is logged to the console


// function IsEven(number){
//   if (number % 2 ==0){
//     console.log("True");
//   }
//   else{
//     console.log("False");
//   }
// }
// IsEven(2);
// IsEven(3);

// function validEmail(){
//   let email = prompt("Enter your email");
//   if (email.includes("@")){
//     console.log("True");
//     }
//     else{
//       console.log("False");
// }


// function ican(){
//   let name = prompt("Enter your name");
//     console.log("You must enter your name");
//   let count = 0;
//   while(count<=10){
//     console.log(`${count} ${name} is already great`);
//     count++;
//   }
// }
// ican();

// function ican() {
//   let name;
  
//   // Input validation loop
//   while (true) {
//     name = prompt("Please enter your name (required):");
//     if (name && name.trim() !== "") break;
//     alert("⚠️ Name cannot be empty!");
//   }

//   // Success message
//   console.log(`🌟 Let's go ${name}! 🌟`);
  
//   // Countdown loop
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${i} → ${name} is AMAZING! 💪`);
//   }
// }

// ican();


// callback A function that is passed as an argument to another function

// function hello(callback){
//   console.log("Hello");
//   callback();
// }

// function goodbye(){
//   console.log("Goodbye");
// }

// hello(goodbye);


// function leave(){
//   console.log("I'm leaving");
// }

// function stay(){
//   console.log("I'm staying");
// }

// function sum(callback,x,y){
//  let result = x + y;
//     callback(result);
// }

// function displayConsole(result){
//   console.log(result);
// }

// sum(displayConsole,1,2);

// let number = [1,2,3,4,5];
// number.forEach(display);

//  function display(element){
//   console.log(element)
//  }
  

// let fruits = ["mango","oranges","melon"];
// fruits.forEach(display);
// fruits.forEach(uppercase);
// fruits.forEach(capitalize);

// function capitalize(element, array,index){
//   console.log(array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase());
// }

// function uppercase(element, index ,array){
//   console.log(element.toUpperCase());
// }

// function display(element){
//   console.log(element);
// }

// let numbers = [1,2,3,4,5];
// let squares = numbers.map(square);

// console.log(squares);

// function square(element){
//   return Math.pow(element,2);
// }

// const students = ["Me", "You", "Her","Him"];
// const names = students.map(upper);
// console.log(names);

// function upper(element){
//   return element.toUpperCase() ;
// }


// let numbers = [1,2,3,4,5,6,7,8,9];
// let oddNums = numbers.filter(isOdd);
// let Evennums = numbers.filter(isEven);

// console.log(Evennums);
// console.log(oddNums);


// function isEven(element){
//   return element % 2 == 0;
// }

// function isOdd(element){
//   return element % 2 != 0;
// }

// let ages = [12, 15, 18, 20, 22, 25, 30];
// const adults = ages.filter(isadult);
// console.log(adults);
// const children = ages.filter(isChild);
// console.log(children);



// function isadult(element){
//   return element >=18;
// }

// function isChild(element){
//   return element < 18;
// } 


// const prices =[5,30,10,23,12,34,56,76,78,76];
// const total = prices.reduce(sum);
// console.log(total);

// function sum(accumulator,element){
//   return accumulator + element;
// }

// Function Expression
// Way to define a function a a variable  
// const numbers = [1,2,3,4,5,6,7];
// const squares = numbers.map((element)=>{
//   return Math.pow(element,2);
// });
// const evenNums = numbers.filter((element)=>{
//   return element % 2 == 0;
// });

// const reduce = numbers.reduce((accumulator,element)=>{
//   return accumulator + element;
// });
// console.log(reduce); 
// console.log(evenNums);
// console.log(squares);


// const person = {
//   firstName:"Nextron",
//   lastName:"Kamau",
//   age: 19,
//   occupation: "Software Developer",
// }

// console.log(person.age);


// function Car(Name,Make,Year){
//   this.Name = Name,
//   this.Make = Make,
//   this.Year = Year
//   this.drive = function(){
//     console.log(`You drive a ${Year} car do you?`);
//   }
// }

// const myCar = new Car("Toyota","Toyota",2019);
// myCar.drive();



// class Car{
//   constructor(name,make,year){
//     this.name = name,
//     this.make = make,
//     this.year = year
// }
//   displayProduct(){
//     console.log(`Car: ${this.name}`);
//     console.log(`Car: ${this.make}`);
//   }
// }
// const myCar = new Car("Toyota","Toyota",2019);
// myCar.displayProduct();



















































