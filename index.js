const R = require('ramda');
const { returnValidObject, returnValidArray } = require('./typeCheck')

const validateArray = R.pipe(
    R.defaultTo([]),
    returnValidArray,
)

const validateObject = R.pipe(
    R.defaultTo({}),
    returnValidObject,
)

module.exports = {
    validateArray,
    validateObject
}
