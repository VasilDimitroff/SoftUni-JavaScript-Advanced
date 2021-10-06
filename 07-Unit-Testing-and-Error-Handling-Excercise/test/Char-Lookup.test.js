const lookupChar = require('../Char-Lookup');
const { assert } = require('chai');

describe('Test LookUp char functionallity', () => {
    it('Should return char t when arguments are correct', () => {
        let expected = 't';
        let actual  = lookupChar('test', 3);

        assert.equal(actual, expected);
    });

    it('Should return char t when arguments are correct', () => {
        let expected = 't';
        let actual  = lookupChar('test', 0);

        assert.equal(actual, expected);
    });

    it('Should return undefined when the second parameter is not a number', () => {
        let expected = undefined;
        let actual  = lookupChar('test', [2,3,4]);

        assert.equal(actual, expected);
    });

    it('Should return undefined when the first parameter is not a string', () => {
        let expected = undefined;
        let actual  = lookupChar([2,3,4], 1);

        assert.equal(actual, expected);
    });

    it('Should return undefined when the both parameters are not valid', () => {
        let expected = undefined;
        let actual  = lookupChar([2,3,4], 'test');

        assert.equal(actual, expected);
    });
    
    it('Should return error message when index is out of range with positive', () => {
        let expected = 'Incorrect index';
        let actual  = lookupChar('test', 4);

        assert.equal(actual, expected);
    });

    it('Should return error message when index is out of range with positive', () => {
        let expected = 'Incorrect index';
        let actual  = lookupChar('test', 5);

        assert.equal(actual, expected);
    });

    it('Should return undefined when index is floating number', () => {
        let expected = undefined;
        let actual  = lookupChar('test', 5.1);

        assert.equal(actual, expected);
    });

    it('Should return error message when index is out of range with negative', () => {
        let expected = 'Incorrect index';
        let actual  = lookupChar('test', -2);

        assert.equal(actual, expected);
    });
});