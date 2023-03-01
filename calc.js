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
    document.body.appendChild(button);
}

let symbols = ['+', '-', '*', '/','=', 'AC','C'];

for (i in symbols) {
    let button = document.createElement('button');
    button.textContent = symbols[i];
    document.body.appendChild(button);
    
}

    





