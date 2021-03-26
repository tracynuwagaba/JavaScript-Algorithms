/* Convert the given number into a roman numeral
All roman numerals answers should be provided in upper case */

// Array approach

const convertToRoman = (num) => {
    let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNumeral = [
        'M', 
        'CM', 
        'D', 
        'CD', 
        'C', 
        'XC', 
        'L', 
        'XL', 
        'X', 
        'IX', 
        'V', 
        'IV', 
        'I'
    ];

    let roman = "";

    for (let i = 0; i < decimalValue.length; i++) {
        while (decimalValue[i] <= num) {
            roman += romanNumeral[i];
            num -= decimalValue[i];
        }
    }

    console.log(roman);
};

convertToRoman(36);