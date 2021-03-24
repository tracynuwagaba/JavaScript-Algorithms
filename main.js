// Checking for a palindrome using built-in functions

function palindrome(str) {
    let reg = /[\W_]/g;
    /* Step 1. Lowercase the string and use the regex to remove unwanted
    characters from it */
    let lowerCaseStr = str.toLowerCase().replace(reg, '');
    // Step 2. Use built-in functions to reverse the string
    let reversedStr = lowerCaseStr.split('').reverse().join('');
    /* Step 3. Check if reversedStr is strictly equals to lowerCasestr
    and returns a boolean */
    return reversedStr === lowerCaseStr;
}

console.log(palindrome("A man, a plan, a canal. Panama"));