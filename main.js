// Return true if the passed string looks like a valid US phone number

function telephoneCheck(str) {
    let phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    console.log(phoneRegex.test(str));
}

telephoneCheck("555-555-5555");