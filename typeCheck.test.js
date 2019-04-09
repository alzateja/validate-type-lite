const  {
    returnValidArray,
    returnValidObject,
} = require('./typeCheck')

const stringMock = '123'
const numMock = 123
const boolMock = {}
const arrayMock = [12, 231, 31]
const objectMock = {valid: { test: 123}}

describe('returnValidArray', () => {
    it('should properly identify an object based on the arguments passed', () => {
        expect(returnValidArray()).toEqual([]);
        expect(returnValidArray(null)).toEqual([]);
        expect(returnValidArray(undefined)).toEqual([]);
        expect(returnValidArray(NaN)).toEqual([]);
        expect(returnValidArray(stringMock)).toEqual([]);
        expect(returnValidArray(numMock)).toEqual([]);
        expect(returnValidArray(boolMock)).toEqual([]);
        expect(returnValidArray(arrayMock)).toEqual(arrayMock);
        expect(returnValidArray(objectMock)).toEqual([]);
    });
})


describe('returnValidObject', () => {
    it('should always return an object based on the arguments passed', () => {
        expect(returnValidObject()).toEqual({});
        expect(returnValidObject(null)).toEqual(null);
        expect(returnValidObject(undefined)).toEqual({});
        expect(returnValidObject(NaN)).toEqual({});
        expect(returnValidObject(stringMock)).toEqual({});
        expect(returnValidObject(numMock)).toEqual({});
        expect(returnValidObject(boolMock)).toEqual({});
        expect(returnValidObject(arrayMock)).toEqual({});
        expect(returnValidObject(objectMock)).toEqual(objectMock);
        expect(returnValidObject({})).toEqual({});
    });
})
