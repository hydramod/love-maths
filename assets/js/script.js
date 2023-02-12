//wait for dom to finish loading, get button elements and add event listeners
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");

})

/**
 * Main game loop called when script is loaded and after the user's
 * answer has been proccessed.
 */

function runGame(gameType){

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition"){
        displayAdditonQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType == "multiply") {
        displayMultiplyQuestion(num1, num2)
    } else if (gameType === "division") {
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks answer
 */
function checkAnswer(){

    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert(`You got it right! :D`);
    } else {
        alert(`You got it wrong...The correct answer is: ${calculatedAnswer[0]}`);
    }

    runGame(calculatedAnswer[1]);

}


/**
 * Gets operands dn the operator and calculates/retuns the answer
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "-"){
        return [operand1 - operand2, "subtract"];
    } else if (operator === "*") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "/") {
        return [operand1 / operand2, "division"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimpleneted operator ${operator}. Aborting!`
    }
}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditonQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion(){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "-";

}

function displayMultiplyQuestion (){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "*";

}

function displayDivisionQuestion(){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";
}