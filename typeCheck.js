const isArrayType = args => Array.isArray(args)
const isObjectType = args => typeof args === 'object' && !isArrayType(args)

const returnValidArray = (args) => isArrayType(args) ? args : [];
const returnValidObject = (args) => isObjectType(args) ? args : {};



module.exports = {
    isArrayType,
    isObjectType,
    returnValidArray,
    returnValidObject,
}
