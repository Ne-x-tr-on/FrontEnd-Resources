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

function greet(){
  console.log("Hello, World!");
}
greet();


function happybirthday(name,age){
    console.log(`HappyBirthday ${name}, you are ${age} years old`);
}

happybirthday("Newton", 19);