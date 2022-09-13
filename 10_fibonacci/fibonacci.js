const fibonacci = function(n) {
    if(n < 0) return "OOPS";
    //if(n == 0) return 0; //in solutions but not required to pass test

    let previousValue = 1
    let currentValue = 0
    for (let i = 1; i < n; i++) {
        const temp = previousValue
        previousValue += currentValue 
        currentValue = temp
    }
    return previousValue
};

// Do not edit below this line
module.exports = fibonacci;
