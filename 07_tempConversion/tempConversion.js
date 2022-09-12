const ftoc = function(tempature) {
  return Math.round(((tempature - 32) * (5/9)) * 10) / 10;
};

const ctof = function(tempature) {
  return Math.round((tempature * (9/5) +32) * 10) /10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
