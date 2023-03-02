document.addEventListener('DOMContentLoaded',function() {
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operation) {
  switch (operation) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Invalid operation';
  }
}

for (let i = 0; i < 10; i++) {
    let button= document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', function() {
      const result = document.getElementById('result');
      result.value = result.value + i;
  });
    document.body.appendChild(button);
}

let symbols = ['+', '-', '*', '/','=','Clear'];

for (i in symbols) {
    let button = document.createElement('button');
    button.textContent = symbols[i];
    document.body.appendChild(button);
    button.addEventListener('click',() =>{
      const result = document.getElementById('result');
      if(symbols[i] === '='){
        calc();
      } 
      else if(symbols[i] === 'Clear'){
        result.value = '';
      }
      else{
        result.value = result.value + symbols[i];

      }
    });
}






    
function updateResult(value) {
  const result = document.getElementById('result');

  if (!isNaN(value)){
    return result.value = value;

  }
  else{
    return result.value += value;
  }
}

  



function clear() {
  result.value = '';
}

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.textContent === '=') {
        result.value = calc();
      } else if (button.textContent === 'Clear') {
        result.value = '';
      } else {
        updateResult(button.textContent);
      }
    });
   
});

function calc(){
const regex = /^(\d+)([+\-*/])(\d+)$/;
let input = document.getElementById('result').value;
let match = input.match(regex);
if(match){
  let num1 = parseInt(match[1]);
  let operator = match[2];
  let num2 = parseInt(match[3]);
  document.getElementById('result').value = operate(num1,num2,operator);
  alert(document.getElementById('result').value);

}
else {
  alert('Invalid Input');
}
}

});
