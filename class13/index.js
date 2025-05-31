//Exception Handeling 

//try ,throw,catch
try{
let x = 1;
if(x == 0)
console.log('THis is try block...!');
throw('error detacted..!');
}
catch(e){
    console.log(e);
}
finally{
    console.log("this is finally block this will defenetly run...!");
    
}
