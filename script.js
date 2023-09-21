const equalValue = document.querySelector('.number-container');
const inputValue = document.querySelector('.equal-container');
const numpads = document.querySelectorAll('.numpads');
const operators = document.querySelectorAll('.operations');
const clearInput = document.querySelector('#clear');
const deleteInput = document.querySelector('#delete');

let valuesToOperate = [];

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
    } else {
      inputValue.textContent += numpad.id;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    equalValue.textContent += `${inputValue.textContent}${operator.textContent}`;
    inputValue.textContent = '';
  });
});


