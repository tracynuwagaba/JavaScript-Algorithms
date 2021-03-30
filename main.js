
const rot13 = str => {
    let cipher = "";
    const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"];

    for (let i = 0; i < str.length; i++) {
        if (/\w/.test(str[i])) {
            // checks if letter
            cipher += alphabet[alphabet.indexOf(str[i]) + 13];
        } else {
            cipher += str[i];
        }
    }

    console.log(cipher);
};

rot13("SERR PBQR PNZC");