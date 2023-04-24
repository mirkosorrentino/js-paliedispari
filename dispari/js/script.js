// INPUT and LOGICS
const evenOrOdd = prompt("Even or Odd (write all in lowercase)");
const userNumber = parseInt(prompt("Pick a number between 1 and 5"));

console.log(evenOrOdd, userNumber);

const computerNumber = getRandomNumber(1, 5)
console.log(computerNumber);

const numberSum = userNumber + computerNumber;
console.log(numberSum);

const result = isEvenOrOdd(numberSum);
console.log(result);

let finalMessage = ""
if (evenOrOdd === result) {
    finalMessage = "Congratulations! You won"
} else {
    finalMessage = "I'm sorry :( You lost"
}

// OUTPUT
document.getElementById("user-choice").innerHTML = `You picked ${evenOrOdd}`;
document.getElementById("user-number").innerHTML = `You picked ${userNumber}`;
document.getElementById("computer-number").innerHTML = `The computer's number is ${computerNumber}`;
document.getElementById("sum-number").innerHTML = `So the sum is ${numberSum}`;
document.getElementById("result").innerHTML = `${numberSum} is ${result}`;
document.getElementById("final-message").innerHTML = finalMessage;

// FUNCTIONS
/**
 * Description function that generate a random number between a min number and a max number
 * @param {number} min
 * @param {number} max
 * @returns {number} A random number between a min number and a max number
 */
function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

/**
 * Description function that checks if a given number is either even or odd
 * @param {number} numberToCheck
 * @returns {string} odd if it's true, else even
 */
function isEvenOrOdd(numberToCheck) {
    let output = ""
    if(numberToCheck % 2 === 1) {
        output = "odd"
        return output;
    } else {
        output = "even"
        return output;
    }
}