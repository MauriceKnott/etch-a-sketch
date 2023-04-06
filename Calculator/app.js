const clear = document.querySelector(".clear")
const input = document.querySelector(".input")
const buttons = document.querySelectorAll("button")
let calculation = []
let accumulativeCalculation



function calculate(button) {
    const value = button.textContent
    if (value === "clear") {
        calculation = []
        document.querySelector(".input").textContent = '';
    } else if (value === "=") {
        input.textContent = result
    }
    calculation.push(value)
    accumulativeCalculation = calculation.join('')
    input.textContent = accumulativeCalculation
}

clear.onclick = function () {
    window.location.reload();
}


console.log(calculate)
console.log(accumulativeCalculation)

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))

console.log(buttons)

result.addEventListener("click", function () {

    let inputString = input.textContent;
    let numbers = inputString.split(/\+|\-|\×|\÷/g);
    let operators = inputString.replace(/[0-9]|\./g, "").split("");

    console.log(inputString);
    console.log(operators);
    console.log(numbers);
    console.log("----------------------------");

    let divide = operators.indexOf("÷");
    while (divide != -1) {
        numbers.splice(divide, 2, parseFloat(numbers[divide]) / parseFloat(numbers[divide + 1]));
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
    }

    let multiply = operators.indexOf("×");
    while (multiply != -1) {
        numbers.splice(multiply, 2, parseFloat(numbers[multiply]) * parseFloat(numbers[multiply + 1]));
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
    }

    let subtract = operators.indexOf("-");
    while (subtract != -1) {
        numbers.splice(subtract, 2, parseFloat(numbers[subtract]) - parseFloat(numbers[subtract + 1]));
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }

    let add = operators.indexOf("+");
    while (add != -1) {
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }
    let clear = operators.indexOf("c");
    while (clear != -1) {
        calculation = []
        input.textContent = '.'
        clear = operators.indexOf("c");
    }




    input.innerHTML = numbers[0];

    result = true;
});



