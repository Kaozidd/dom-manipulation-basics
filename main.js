document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})


document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  let tempVal = answerPTagWithValue.textContent;
  let value = parseInt(tempVal, 10);
  let resVal = value*2;
  answerPTagWithValue.textContent = resVal;
})


//  COPIADO DE LA TAREA DE CESAR PARA NO VOLVERME LOCO
document.querySelector("#color-circle button").addEventListener('click',function(){
  circuloAColorear = document.querySelector("#circle-bw")
  if (circuloAColorear.style.backgroundColor !== "black") {
    circuloAColorear.style.backgroundColor = "black"  
  } else circuloAColorear.style.backgroundColor = "white"
})


document.querySelector("#blow-up button").addEventListener('click',function(){
  let circle = document.querySelector("#blow-up .circle-red");
  let circStyle = window.getComputedStyle(circle);
  let circHeight = circStyle.getPropertyValue('height');
  let circWidth = circStyle.getPropertyValue('width');
  circHeight = parseInt(circHeight, 10);
  circWidth = parseInt(circWidth, 10);
  if (circWidth <= 320){
    circle.style.height = 2*circHeight+'px';
    circle.style.width = 2*circWidth+'px';
  } else {
    circle.style.height = '40px';
    circle.style.width = '40px';
  }
})


document.querySelector("#remove button").addEventListener('click',function(){
  let item = document.querySelectorAll("#user-list li");
  const listArr = [...item];
  console.log(listArr);
  for (let i=0; i<listArr.length; i++){
    if (listArr[i].classList.contains('inactive') === true){
      listArr[i].style.display = 'none';
    }
  }
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  document.querySelector("#reverse-squares .answer-box").classList.toggle("reverse-squares")
})


document.querySelector("#pig-latin button").addEventListener('click',function(){
  
  var item = document.querySelectorAll("#pig-latin #tasks li")
  const arrayOfElements = [...item];
  for (let i=0; i<arrayOfElements.length; i++){
    const element = item[i];
    var text = element.textContent;
    var resText = text.split('').reverse().join('');
    element.textContent = resText;
  }
})

var val = 0
document.querySelector("#cycle-image button").addEventListener('click',function(){
   let image = document.querySelector("#city-img");
   val += 1;
   image.setAttribute("src", "./images/city-photo-"+val%10+".jpg")
})