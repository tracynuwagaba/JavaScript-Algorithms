/* Convert the given number into a roman numeral
All roman numerals answers should be provided in upper case */

function convertToRoman(num) {
    let romanNumeral = "";

    // Using a while loop with if statements
    while (num !== 0) {
        if (num >= 1000) {
            romanNumeral += 'M';
            num -= 1000;
        } else if (num >= 900) {
            romanNumeral += 'CM';
            num -= 900;
        } else if (num >= 500) {
            romanNumeral += 'D';
            num -= 500;
        } else if (num >= 400) {
            romanNumeral += 'CD';
            num -= 400;
        } else if (num >= 100) {
            romanNumeral += 'C';
            num -= 100;
        } else if (num >= 90) {
            romanNumeral += 'XC';
            num -= 90;
        } else if (num >= 50) {
            romanNumeral += 'L';
            num -= 50;
        } else if (num >= 40) {
            romanNumeral += 'XL';
            num -= 40;
        } else if (num >= 10) {
            romanNumeral += 'X';
            num -= 10;
        } else if (num >= 9) {
            romanNumeral += 'IX';
            num -= 9;
        } else if (num >= 5) {
            romanNumeral += 'V';
            num -= 5;
        } else if (num >= 4) {
            romanNumeral += 'IV';
            num -= 4;
        } else {
            romanNumeral += 'I';
            num -= 1;
        }
    }

    console.log(romanNumeral);
}

convertToRoman(36);