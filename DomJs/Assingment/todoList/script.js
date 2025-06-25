
let container = document.getElementById('mainDiv');

let button = document.getElementById('btn');


function inputData(){
    const inputFild = document.getElementById('textInput').value

    const createEle = document.createElement('p')
    createEle.textContent = inputFild
    container.append(createEle)

  //  button.addEventListener('click',()=>{

  //   const delete = document.createElement('button')
  //   container.append(delete)
    
  //  })

}




button.addEventListener('click',function(){
  inputData()

})



