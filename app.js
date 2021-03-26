/* Convert the given number into a roman numeral
All roman numerals answers should be provided in upper case */

// Object approach
function convertToRoman(num) {
    let romanNumKeys = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let romanNumeral = "";

    for (let key in romanNumKeys) {
        while (num >= romanNumKeys[key]) {
            romanNumeral += key;
            num -= romanNumKeys[key];
        }
    }

    console.log(romanNumeral);
}

convertToRoman(36);