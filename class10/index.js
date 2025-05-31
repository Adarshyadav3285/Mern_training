//Freeze & Seal

//Freeze (No change only print)
// let x ={
//     name:'adarsh',
//     course:'B.tech',
//     age:25
// }

// Object .freeze(x);

// x.age = 23; //It will not modify..!
// console.log(x);

// //Seal (No change Only Modification is applicable)
// let x1 ={
//     name1:'Vidhi',
//     course1:'B.Pharma',
//     age1:23
// }

// Object.seal(x1);

// x1.age1 = 25; //It can only modify on existing value..!
// console.log(x1);

//Rest & Spread ( it is denoted by (...) tripal dot)

//Rest(IT STORES REST OF THE REMAINING DATA OF THE FUNCTION)

// function sum(a, b, ...c) {
//   for (let i = 0; i < sum.length; i++) {
//     console.log(c[i]);
//   }
//   return a + b;
// }

// let arr = sum(10, 20, 30, 40, 50);
// console.log(arr);


//Spread()






//Shallow copy & Deep copy

// Shallow copy( )




//Desracturing

//Desracturing for Array

let array = [20,40,60];
let [aa,bb,cc] = array;
console.log(aa,bb,cc)


//Desracturing in object

let obj = {
    name :'adarsh',
    age  :23
}
// let {name,age} = obj;
let {name1,age1} = obj; //it will show undefine.!
console.log(name1,age1);

