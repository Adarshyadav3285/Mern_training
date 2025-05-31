//Deep  & Shallow Copy...!

// Shallow Copy
// let car = {
//   name: "porche",
//   color: "black",
//       subcar: {
//                 id: 1,
//               },
//   milage: "9kmph",
// };

// let car2 = {...car} //Spread oprator (it will copy the parant by value and inner by refrence)
// // let car2 = car

// car2.subcar.id = 2;
// car2.name = 'lemborgini';

// console.log(car);
// console.log(car2);



// //Deep Copy
// let bike= {
//   name: "ninja",
//   color: "green",
//       numberplate: {
//                 id: 4040,
//               },
//   milage: "1000kmph",
// };

// // const bike2 = {...bike};
// const bike2 = JSON.parse(JSON.stringify(bike));

// bike2.numberplate.id = 8080;
// bike2.name = 'Passion';

// console.log(bike);

// console.log(bike2);




// // SIR EXPLAINATION 

// // deepcpoy=> me app duplicate obj se orignal obj ke nested wale obje ko change nhi kr pata hai ,but orignal obj se kr skte hai 
// // const cooler1={
// //     name:"Bluestar",
// //     id:"dre101",
// //     functionality:{
// //         kam:"colling",
// //         color:"white"
// //     },
// //     height:3.5,
// // };
// // const coller2=JSON.parse(JSON.stringify(cooler1));
// // // coller2.name="white";
// // cooler1.functionality.color="black";

// // console.log("orignal",cooler1);
// // console.log("duplicate",coller2);


// //shallow copy
// const coller1={
//     name:"bkf",
//     id:"drf1230",
//     functionality:{
//         kaam:"coding",
//     },
//     height:305
// };
// // const coller2=coller1; // call by refrance...!
// // coller1.id="55550";

// // const coller2=Object.assign({},cooler1); //by object assign oprator
// // coller2.name="ram";

// const coller2={...coller1}; //By split oprator
// coller2.name="gourav";

// console.log("orignal coller1",coller1)
// console.log("dublicate coller2",coller2);

