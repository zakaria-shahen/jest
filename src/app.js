const isInteger = require('./isInteger')

const checkInt18 = number => isInteger(number) && number >= 18

module.exports = checkInt18

