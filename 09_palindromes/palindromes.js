const palindromes = function (string) {
    const punctuationless = string.toLowerCase().replace(/[\W\d]/g,'') // can also us [^a-z]
    return punctuationless === punctuationless.split('').reverse().join('') //checks original aginst reversed-original
};

// Do not edit below this line
module.exports = palindromes;
