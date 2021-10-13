// In this tutorial we are going to be covering the below topics 

// Spread Operators
// Rest
// Arrow
// ForEach
// Map
// Filter
// Reduce
// Find
// Sort
// DOM Selectors
// ES10 Syntax


// Spread Operators

// const globalPlayer = ["Rahul","ajay","John"];
// const globalPlayer2 = ["Ramu","Raju","Sandra"];

// // const player1 = globalPlayer.concat(globalPlayer2);
// const player1 = [...globalPlayer, globalPlayer2]; 


// console.log(player1);

// // console.log(globalPlayer);
// // console.log(globalPlayer2);

// Rest operator

// const globalPlayer = ["Rahul","ajay","John"];

// const [first, second, third] = globalPlayer;

// console.log(third);

// const globalPlayer = {
//     id:0,
//     name: "Ajay",
//     age: 20
// };

// const {id, ...rest} = globalPlayer;

// console.log(id);
// console.log(rest);

// Arrow funtions

// function myFunc() {
//     console.log("Running");
// }

// const myFunc = (value) => value + 5;

// console.log(myFunc(5));

// ForEach

// const globalPlayer = [
//     {
//         id: 0,
//         name: "Ajay",
//         age: 20
//     },
//     {
//         id: 1,
//         name: "Rahul",
//         age: 25
//     },
//     {
//         id: 2,
//         name: "John",
//         age: 20
//     }
// ];

// for(let i=0;i<globalPlayer.length;i++){
//     console.log(globalPlayer[i].name);
// }

// globalPlayer.forEach((value, index, array)=>{
//     console.log(value.name);
// })

// Map 

// const globalPlayer = [
//     {
//         id: 0,
//         name: "Ajay",
//         age: 20
//     },
//     {
//         id: 1,
//         name: "Rahul",
//         age: 25
//     },
//     {
//         id: 2,
//         name: "John",
//         age: 20
//     }
// ];

// const newArray = globalPlayer.map((value)=> value.age)
// const newArray = globalPlayer.filter((value)=> value.age === 20 && value.id === 2);


// const numberArray = [15, 10, 20, 5, 50, 66, 88];


// const newArray = numberArray.reduce((total,value)=> total + value ,10);


// console.log(newArray);

// Find

// const globalPlayer = [
//     {
//         id: 0,
//         name: "Ajay",
//         age: 20
//     },
//     {
//         id: 1,
//         name: "Rahul",
//         age: 25
//     },
//     {
//         id: 2,
//         name: "John",
//         age: 20
//     }
// ];

// const newObj = globalPlayer.find((value) => value.name === "Rahul" );


// const numberArray = [15, 10, 20, 5, 50, 66, 88];

// newObj = numberArray.sort((a,b)=>b-a);

// console.log(newObj);

// ES10

// const numberArray = [15, 10, [20, 5], 50, [66, 88,[50,60,[88,99]]]];
// // const numberArray = [15, 10, [20, 5]];
// console.log(numberArray.flat(Infinity));


// const globalPlayer = {
//         id: 0,
//         name: "Ajay",
//         age: 20,
//         company: {
//             comp_name: "Google",
//         },
//     }

//     if(globalPlayer?.company?.comp_name) {
//         console.log(globalPlayer.company.comp_name);
//     }


// chaining

// const numberArray = [15, 10, 20, 5, 60, 80, 90, 100, 12, 14, 20];

// const newArray = numberArray
// .map((value)=> value)
// .filter(data=>data > 15)
// .sort((a,b)=> a - b)
// .reduce((total, value)=> total + value, 0);

// console.log(newArray);


const header =  document.querySelectorAll(".header");

header.forEach((data)=> (data.style.color = "red"));