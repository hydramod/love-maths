//wait for dom to finish loading, get button elements and add event listeners
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked submit!");
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
    } else if (gameType === "subract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType == "multiply") {
        displayMultiplyQuestion(num1, num2)
    } else if (gameType === "divsiosn") {
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer(){

}

function calculateCorrectScore(){

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