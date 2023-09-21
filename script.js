const equalValue = document.querySelector('.number-container');
const inputValue = document.querySelector('.equal-container');
const numpads = document.querySelectorAll('.numpads');
const operators = document.querySelectorAll('.operations');
const clearInput = document.querySelector('#clear');
const deleteInput = document.querySelector('#delete');

let valuesToOperate = [];
let operation;
let result;

clearInput.addEventListener('click', () => {
  equalValue.textContent = '';
  inputValue.textContent = '';
  valuesToOperate = [];
});

deleteInput.addEventListener('click', () => {
  inputValue.textContent = inputValue.textContent.replace(/.$/, '');
});

numpads.forEach((numpad) => {
  numpad.addEventListener('click', () => {
    if (numpad.id === 'equals') {
      valuesToOperate.push(equalValue.textContent+inputValue.textContent);
      equalValue.textContent = `${valuesToOperate}${numpad.textContent}`;
      result = operate(valuesToOperate);
      inputValue.textContent = result;
    } else {
      inputValue.textContent += numpad.id;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    equalValue.textContent += `${inputValue.textContent}${operator.textContent}`;
    inputValue.textContent = '';
    if (operator.id === 'plus') {
      operation = '+';
    } else if (operator.id === 'minus') {
      operation = '-';
    } else if (operator.id === 'multiply') {
      operation = 'x';
    } else if (operator.id === 'divide') {
      operation = '÷';
    }
  });
});

function operate(inputs) {
  let inputHolder = inputs.toString();
  let newValuesToOperate;
  let result;

  if (operation === '+') {
    newValuesToOperate = inputHolder.split('+');
    result = addition(newValuesToOperate);
  } else if (operation === '-') {
    newValuesToOperate = inputHolder.split('-');
  } else if (operation === 'x') {
    newValuesToOperate = inputHolder.split('x');
  } else if (operation === '÷') {
    newValuesToOperate = inputHolder.split('÷');
  }

  return result;
}

function addition(inputs) {
  let result;
  result = inputs.reduce((num, current) => +num + +current);
  return result;
}
