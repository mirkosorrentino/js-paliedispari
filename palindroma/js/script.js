// INPUT AND LOGIC
const word = prompt("ciao utente, inserisci una parola e io ti dirò se è palindroma oppure no:");
const palindromeWord = isPalindrome(word);
const finalMessage = "";

if (palindromeWord) {
    message = `${word} is PALINDROME`;
} else {
    message = `${word} is NOT palindrome`;
}

// OUTPUT
document.getElementById("message").innerHTML = message;

// FUNCTIONS
/**
 * Description Function that checks if a given word is either palindrome or not
 * @param {string} wordToCheck
 * @returns {boolean} true if palindrome, else false
 */
function isPalindrome(wordToCheck) {
    const reverseWord = revertString(wordToCheck);
    if(wordToCheck === reverseWord) {
        return true;
    } else {
        return false;
    }
}

/**
 * Description function who revert a word
 * @param {string} stringToRevert
 * @returns {string} the reverted word
 */
function revertString(stringToRevert) {
    let invertedString = "";
    for(let i = stringToRevert.length - 1; i >= 0; i--) {
        invertedString += stringToRevert[i];
    }
    return invertedString;
}
