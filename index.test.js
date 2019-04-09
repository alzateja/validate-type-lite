const  {
    validateArray,
    validateObject
} = require('./')

const stringMock = '123'
const numMock = 123
const boolMock = {}
const arrayMock = [12, 231, 31]
const objectMock = {valid: { test: 123}}

describe('validateArray', () => {
    it('should properly identify an object based on the arguments passed', () => {
        expect(validateArray()).toEqual([]);
        expect(validateArray(null)).toEqual([]);
        expect(validateArray(undefined)).toEqual([]);
        expect(validateArray(NaN)).toEqual([]);
        expect(validateArray(stringMock)).toEqual([]);
        expect(validateArray(numMock)).toEqual([]);
        expect(validateArray(boolMock)).toEqual([]);
        expect(validateArray(arrayMock)).toEqual(arrayMock);
        expect(validateArray(objectMock)).toEqual([]);
    });
})


describe('validateObject', () => {
    it('should properly identify an object based on the arguments passed', () => {
        expect(validateObject()).toEqual({});
        expect(validateObject(null)).toEqual({});
        expect(validateObject(undefined)).toEqual({});
        expect(validateObject(NaN)).toEqual({});
        expect(validateObject(stringMock)).toEqual({});
        expect(validateObject(numMock)).toEqual({});
        expect(validateObject(boolMock)).toEqual({});
        expect(validateObject(arrayMock)).toEqual({});
        expect(validateObject(objectMock)).toEqual(objectMock);
        expect(validateObject({})).toEqual({});
    });
})
