const reverseString = function(string) {
    let reversedString = '';
    for(let i = 1; i <= string.length; i++){
        reversedString += string.substr(-i, 1);
    }
    return reversedString;
};

/*
solution:

const reverseString = function(string) {
 return string.split('').reverse().join('');
};

1.split with an empty string makes an array with all charecters

2. reverse in an array method

3.join take an array and returns it as a string spearing its elements with a comma (,) by defualt. changing it to .join("") empty string returns it with no seperator.

*/

// Do not edit below this line
module.exports = reverseString;
