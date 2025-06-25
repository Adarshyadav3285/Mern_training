let divv  = document.getElementById('myDiv')
console.log(divv)

console.log(divv.attributes);

for(var i=0;i>10;i++){
console.log(divv.attributes[i].value)
}


divv.attributes[0].value='myContainer'

divv.setAttribute('adarsh','this is adarsh container')

// divv.removeAttribute('adarsh')



