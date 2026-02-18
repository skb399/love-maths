// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
runGame("addition")
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
// Generate two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType} Aborting!`;
    } 
}


/**
 * Checks the answer against the first element in the returned calculateCorrectAnswer() array
 */
function checkAnswer() {

let userAnswer = parseInt(document.getElementById("answer-box").value);
let calculatedAnswer = calculateCorrectAnswer();
// Compare the user's answer to the correct answer, calculatedAnswer[0] is the correct answer, calculatedAnswer[1] is the type of the question (addition, subtraction, etc)
let isCorrect = userAnswer === calculatedAnswer[0];

if (isCorrect) {
    alert("Hey! You got it right! :D")
} else {
    alert(`Sorry, you answered ${userAnswer}, the correct answer is ${calculatedAnswer[0]}!`)
}
// Run the game again, using the same type of question as the last one
runGame(calculatedAnswer[1]);

}

/**
 * Gets the operands (numbers) and the operator (plus, minus, etc)
 * directly from the DOM, and returns the correct answer to the question
 */
function calculateCorrectAnswer() {
    
    //using parsInt to convert the values from the DOM into integers so they can be used for mathematical calculations
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}
// Display an addition question to the user, along with the operands
function displayAdditionQuestion(operand1, operand2) {
    // Set the operand1 and operand2 elements to the values passed in   
    document.getElementById('operand1').textContent = operand1;
    // Set the operand2 element to the value passed in
    document.getElementById('operand2').textContent = operand2;
    // Set the operator element to the "+" sign
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}