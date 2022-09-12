const removeFromArray = function(array, ...args) {
    const newArray = [];
    for(const elemnt of array){
        if(!args.includes(elemnt)){
            newArray.push(elemnt);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
