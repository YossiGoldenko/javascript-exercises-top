const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(array) {
  return array.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
};

const multiply = function(array) {
  return array.reduce((preValue, nextValue) => preValue * nextValue, 1);
};

const power = function(x, pow) {
	return x ** pow
};

const factorial = function(n) {
  let result = 1;
  let counter = n;
	for(let i = 0; i < counter; i++){
    result *= n
    n--
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
