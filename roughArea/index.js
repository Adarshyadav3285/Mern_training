// let a = [10,20,30,40]

// let start = a[0];
// let end = a.length;


// while(start<end){

// let temp = a[start];
// a[start] = a[end];
// a[end] = temp;

// start++;
// end--;
// }



//DEEP & SHALLOW
// let obj = {
//     name:'adarsh',
//     gg:{
//         id:'1'
//     }
// }

// let obj2 = obj ; //shallow copy (change will be on both Orignal & Copy)
// let obj2 = {...obj} ; // shallow copy 
// let obj2 = Object.assign({},obj) ; // shallow copy

// let obj2 = JSON.parse(JSON.stringify(obj)); //Deep copy

// obj2.gg.id = '2';
// obj2.name = 'vidhi'

// console.log(obj);
// console.log(obj2);



//Promis
// let mypro = new Promise((resolve,reject)=>{
// resolve('this is resolve');
// reject('this is reject')

// });
// mypro.then((ip)=>console.log(ip))
// .catch((err)=>console.log(err))

// console.log(mypro);



//Api fatch
// let x = fetch('https://jsonplaceholder.typicode.com/users');
// let arr =[];
//  arr = x.then((ar)=>ar.json().then((data)=>console.log(data)).catch((err)=>console.log(err)))


 const user11 = {
   userName: "syam",
   age: 20,
   address: {
    city: "katni",
     state: "mp",
   },
 };


//  const user12 = { ...user11};
//  user12.userName = "Raghav";
//  user12.address.city = "Jab"; 
//  console.log("user11", user11); 
//  console.log("user12", user12); 

// 2nd category
// const user12 = { ...user11,...user11.address };
// user12.userName = "Raghav";
// user12.address.city = "Jabalpur"; 
// console.log("user12 has newly assign city which in user11", user12); 


// 3rd category

// const user12 = JSON.parse(JSON.stringify(user11));
// user12.userName = "Raghav";
// user12.address.city = "Jabalpur"; 
// console.log("no changes bcs we do deep copy", user11); 
// console.log("name and city in user12 object has changed", user12); 
// Ans=>

//     const myNumbers = [2, 4, 5, 6, 7];
// const modifyArray = myNumbers.map((num) => {
//   return (num = num / 2);
// });
// const modifyArray1 = myNumbers.map((num) => (num = num / 2));
// console.log("Given Array ", myNumbers);
// console.log("Modified array ", modifyArray);
// console.log("without return ", modifyArray1);
// Ans=>


//     const Numbers = [0, 2, 4, 5, 6, 7];
// // ans is below
// const filterArray = Numbers.filter((num) => {
//   return num >= 4;
// });

// console.log("Orginal array ", Numbers);
// console.log("Filter array", filterArray);
// // Ans=>

// console.log(name);
// var name = "John"; 

// setTimeout(() => {
//   console.log("I am setTime out ");
// });
// Promise.resolve().then(() => {
//   console.log("I am Promise  ");
// });
// console.log("I am end here ");

// async function PrintValue() {
//   return "Hello world";
// }
// let ans = PrintValue();
// console.log(ans);
//Ans


// for(var i=0;i<=3;i++){
// setTimeout(()=>{
//   console.log(i);
  
// })
// }
