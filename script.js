function addition(input1, input2) {
  return input1 + input2;
}

function subtraction(input1, input2) {
  return input1 - input2;
}

function multiplication(input1, input2) {
  return input1 * input2;
}

function division(input1, input2) {
  return (input1 / input2).toFixed(2);
}

function operate(operator, input1, input2) {
  let result;
  if (operator === 'addition') {
    result = addition(input1, input2);
  } else if (operator === 'subtract') {
    result = subtraction(input1, input2);
  } else if (operator === 'multiply') {
    result = multiplication(input1, input2);
  } else if (operator === 'division') {
    result = division(input1, input2)
  }
  return result;
}

const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const screenValue = document.querySelector('.number-container');
const numpads = document.querySelectorAll('.numpads');
const equalOperator = document.querySelector('#equals');
const operators = document.querySelectorAll('.operations');

let firstNumber;
let secondNumber;
let operation;

numpads.forEach((numpad) => {
  numpad.addEventListener('click', () => {
    if(numpad.id === 'equals') {
    } else {
      screenValue.textContent += numpad.id;
    }
    if (numpad.id === '.') {
      if (screenValue.textContent.includes('.')) {
        numpad.disabled = true;
      }
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    if (operator.id === 'plus') {
      operation = 'addition';
      firstNumber = screenValue.textContent;
      screenValue.textContent = '';
    } else if (operator.id === 'minus') {
      operation = 'subtract';
      firstNumber = screenValue.textContent;
      screenValue.textContent = '';
    } else if (operator.id === 'multi') {
      operation = 'multiply';
      firstNumber = screenValue.textContent;
      screenValue.textContent = '';
    } else if (operator.id === 'divide') {
      operation = 'division';
      firstNumber = screenValue.textContent;
      screenValue.textContent = '';
    }
  });
}); 

equalOperator.addEventListener('click', () => {
  secondNumber = screenValue.textContent;
  +firstNumber;
  +secondNumber;
  screenValue.textContent = operate(operation, firstNumber, secondNumber);
});


clearButton.addEventListener('click', () => {
  screenValue.textContent = '';
  firstNumber = 0;
  secondNumber = 0;
  operation = '';
});

deleteButton.addEventListener('click', () => {
  screenValue.textContent = screenValue.textContent.replace(/.$/, '');
});