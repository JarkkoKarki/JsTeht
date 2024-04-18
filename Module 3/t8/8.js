document.addEventListener('DOMContentLoaded', function() {
  const num1Input = document.getElementById('num1');
  const num2Input = document.getElementById('num2');
  const selectValue = document.getElementById('operation');
  const resultParagraph = document.getElementById('result');
  const calculateButton = document.getElementById('start');

  calculateButton.addEventListener('click', function() {
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);

    const operation = selectValue.value;

    let result;
    if (operation === 'add') {
      result = num1 + num2;
    } else if (operation === 'sub') {
      result = num1 - num2;
    } else if (operation === 'multi') {
      result = num1 * num2;
    } else if (operation === 'div') {
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = 'Cannot divide by zero';
      }
    } else {
      result = 'Invalid operation';
    }

    resultParagraph.textContent = result;
  });
});
