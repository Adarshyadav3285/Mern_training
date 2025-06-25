//Case:1 //By Default window ko refer karega..!
// console.log(this);


//Case:2 //closest object ko refer karega ..!
// const object = {
//   username: "adarshyadav",
//   name: "adarsh",
//   printname: function () {
//     console.log(this.name);
//     console.log(this);
//   },
// };
// object.printname();



//Case:3 // We can't use 'this' keyword in arrow function..!

// const object = {
//   username: "adarshyadav",
//   name: "adarsh",
//   printname:()=>{ //By Default window ko refer karega
//     console.log(this.username); 
//     console.log(this);
//   },
// };
// object.printname();



// Case:4 //it is refering to window object..!
// function check(){
//     console.log(this)
// }
// check();


//Case:4 //Solution:- by adding 'new' now this will refer to function object..!

// function check2(){
//     console.log(this)
// }
// new check2();


//Case:5 //Adhura hai..!
// const storeh = document.querySelectorAll('heading1');


// Case:6 Ye bhi by Default window ko refer karega
// const object = {
//   username: "adarshyadav",
//   name: "adarsh",

//   printname:function(){
//     function hii(){  //By Default window ko refer karega
//     console.log(this);
//     }
//     hii();
//   },
  
// };

// object.printname();




//async await 

//async:- keyword is use to make functuib asyncronous
//await is optionsal 
//await keyword always use inside the async function 
// by default async return promise 

// api calling 
// const ans = fetch("https://jsonplaceholder.typicode.com/users");
// let arr = []
// const data = ans.then((op) => {
//     op.json().then((opd) => {
//         console.log("my data", opd);
//         arr.push(opd)
//     });
// });
// console.log("Mere array me data", arr)

// const url ="https://jsonplaceholder.typicode.com/users"

// async function callfn(url) {
//     const res = await fetch(url)
//     let result = await res.json()
//     console.log(result);
// }
// callfn(url);


// let url ="https://jsonplaceholder.typicode.com/users";
// async function call(url) {
// await fetch(url)
// .then((convert)=> convert.json().then((data)=>console.log(data)))
// .catch((err)=>console.log(err));
// }
// call(url);