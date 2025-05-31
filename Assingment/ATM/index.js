{
let x = 100;
let y = prompt("enter your debit ampunt:");
let CorD = prompt("If you want to Cradit press 1 If you want to Debit press 2:");

// let dep =  y.parseInt();
// let z = 1;
// switch(z==1){
//     case 1:x-=y;
//     break;
//     case 2:x+=y;
//     break;
//     console.log('Balance Left :-', x);
// }

if(CorD==1){
x-=y;
console.log('Balance Left :-', x);
}
if(CorD==2){
x+=y;
console.log('Balance Left :-', x);
}


}