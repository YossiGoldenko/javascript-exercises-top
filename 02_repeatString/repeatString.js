const repeatString = function (string, num) {
    let sumString = '';
    if(num < 0){
        return 'ERROR';
    }
    for (let i = 0; i < num; i++) {
        sumString += string;
    }
    return sumString;
};

// Do not edit below this line
module.exports = repeatString;
