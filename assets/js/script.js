//wait for dom to finish loading, get button elements and add event listeners
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }

})

/**
 * Main game loop called when script is loaded and after the user's
 * answer has been proccessed.
 */

function runGame(){
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer(){

}

function calculateCorrectScore(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditonQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion (){

}

function displayDivisionQuestion(){

}