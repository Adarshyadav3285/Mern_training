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

