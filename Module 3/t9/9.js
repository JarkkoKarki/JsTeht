document.getElementById('start').addEventListener('click', function() {
    const userInput = document.getElementById('calculation').value.trim();

    if (userInput !== '') {
        const operators = ['+', '-', '*', '/'];

        let operatorIndex = -1;
        let operator;

        for (let i = 0; i < operators.length; i++) {
            operatorIndex = userInput.indexOf(operators[i]);
            if (operatorIndex !== -1) {
                operator = operators[i];
                break;
            }
        }


        if (operatorIndex !== -1) {
            const operand1 = parseInt(userInput.substring(0, operatorIndex), 10);
            const operand2 = parseInt(userInput.substring(operatorIndex + 1), 10);

            let result;

            if (operator === '+') {
                result = operand1 + operand2;
            } else if (operator === '-') {
                result = operand1 - operand2;
            } else if (operator === '*') {
                result = operand1 * operand2;
            } else if (operator === '/') {
                if (operand2 !== 0) {
                    result = Math.floor(operand1 / operand2);
                } else {
                    document.getElementById('result').innerText = "Error: Division by zero";
                    return;
                }
            }

            document.getElementById('result').innerText = "Result: " + result;
        } else {
            document.getElementById('result').innerText = "Error: No operator found";
        }
    } else {
        document.getElementById('result').innerText = "Error: Please enter a calculation";
    }
});
