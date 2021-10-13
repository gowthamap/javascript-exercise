// Functions

// function myFunc(z){
//     let a = 5;
//     let b = z;
//     let c = a + b;
//     return c;
// }


// Objects

// let user = {
//     firstName: "John",
//     lastName: "Doe"
// };

// console.log(user.lastName);


// Array
// let myArray = ["Test", "Test1"]

// console.log(myArray[1]);




// String Methods

// let a = "Debug m m";

// let b = a.slice(-5);

// console.log(b);



// Number Methods

// let a = "15";
// let b = 10;

// console.log(typeof parseInt(a));
// console.log(typeof b.toString());


// Array Methods

// let myArray = ["B", "C", "A"];

// myArray.reverse();

// console.log(myArray);



// Object Methods

// let myObj = {
//     firstName: "John",
//     lastName: "Doe"
// };

// myObj.firstName = "Jacob";

// delete myObj.lastName;

// console.log(myObj);



// IF

// let johnAge =20;

// if (johnAge === 45){
//     console.log("You are old");
// }else if (johnAge <= 30 && johnAge >= 20) {
//     console.log("You are about to be old");
// }else{
//     console.log("You are too young");
// }



// Switch

// let fruits = "Appl";

// switch (fruits) {
//     case "Apple":
//         console.log("I bought Apple");
//         break;
//     case "Banana":
//         console.log("I bought Banana");
//         break;
//     default:
//         console.log("No fruits selected");

// }




// Loop

// let count = 10;

// for(let i=0; i<=10; i++){
//     console.log(i);
// }


// let myArray = ["John", "Doe", "Jacob"];

// for(let x of myArray){
//     document.write(x + "<br>");
// }



// let myObj = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 45
// };

// for(let x in myObj){
//     document.write(myObj[x] + "<br>");
// }



// Events

// let btn = document.getElementById('btn');

// addEventListener('click', myFunc);

// function myFunc(){
//     alert("Clicked the button");

// }






// Spread Operators
// Rest
// Arrow Functions
// ForEach
// Map
// Filter
// Reduce
// Find
// Sort
// DOM Selectors
// ES10 Syntax



// Spread Operators

// const globalPlayer = ["Rahul", "ajay", "John"];
// const globalPlayer2 = ["Ramu", "Raju", "Sandra"];

// // const player1 = globalPlayer.concat(globalPlayer2);
// const player1 = [...globalPlayer, globalPlayer2]; // copy

// console.log(player1);

// console.log(globalPlayer);
// console.log(globalPlayer2);



// Rest

// const globalPlayer = ["Rahul", "ajay", "John"];

// const [first, second, third] = globalPlayer;

// console.log(first);


// const globalPlayer = {
//     id: 0,
//     name: "Ajay",
//     age: 20,
// };

// const { id , ...rest} = globalPlayer;

// console.log( id);
// console.log(rest);




// Arrow

// function myFunc(){
//     console.log("Running");
// };

// myFunc();

// const myFunc = value => value + 5;

// console.log(myFunc(5));



// ForEach

// const globalPlayer = [
//     {
//         id: 0,
//         name: "Ajay",
//         age: 20,
//     },
//     {
//         id: 1,
//         name: "Rahul",
//         age: 25,
//     },
//     {
//         id: 2,
//         name: "John",
//         age: 20,
//     },
// ];

// for(let i = 0; i < globalPlayer.length; i++){
//     console.log(globalPlayer[i].name);
// }


// globalPlayer.forEach((value, index, array) => console.log(value.name))

// Map method

// const globalPlayer = [
//     {
//         id: 0,
//         name: "Ajay",
//         age: 20,
//     },
//     {
//         id: 1,
//         name: "Rahul",
//         age: 20,
//     },
//     {
//         id: 1,
//         name: "John",
//         age: 20,
//     },
// ];

// const newArray = globalPlayer.map((value) => value.age);

// const newArray = globalPlayer.filter((value) => value.age === 20 && value.id === 1);


// console.log(newArray);

// const numberArray = [15, 10, 20, 5, 50, 66, 88];

// let newArray = numberArray.reduce((total, value) => total + value, 0);

// console.log(newArray);



// Find

// const globalPlayer = [
//     {
//         id: 0,
//         name: "Ajay",
//         age: 25,
//     },
//     {
//         id: 1,
//         name: "Rahul",
//         age: 20,
//     },
//     {
//         id: 1,
//         name: "John",
//         age: 20,
//     },
// ];

// const newObj = globalPlayer.find((value) => value.age === 25);


// const numberArray = [15, 10, 20, 5, 50, 66, 88];

// const sortedArray = numberArray.sort((a, b) => b-a );

// console.log(numberArray);


// ES10

// const numberArray = [15, 10, [20, 5], 50, [66, 88,[50, 60,[88, 99]]]];
// // const numberArray = [15, 10, [20, 5]];


// console.log(numberArray.flat(Infinity));


// const globalPlayer = {
//         id: 1,
//         name: "Ajay",
//         age: 20,
//         company: {
//             comp_name: "Google",
//     },
// };

// if(globalPlayer?.company?.comp_name) {
//     console.log(globalPlayer.company.comp_name);
// }



// Chaining

// const numberArray = [15, 10, 20, 5, 60, 80, 90, 100, 12, 14, 20];

// const newArray = numberArray.map((value) => value)
// .filter((data) => data > 15)
// .sort((a, b) => a - b )
// .reduce((total, value)=> total + value, 0);

// console.log(newArray);



// document.getElementById("header").innerHTML = "Debug media";

// document.querySelector("#header").style.color = "red";


const header = document.querySelectorAll(".header");

header.forEach((data) => (data.style.color = "red"));





















