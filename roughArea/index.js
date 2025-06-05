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


//ApI fatch

// let x = fetch('https://jsonplaceholder.typicode.com/users');
// let arr =[];
//  arr = x.then((ar)=>ar.json().then((data)=>console.log(data)).catch((err)=>console.log(err)))

