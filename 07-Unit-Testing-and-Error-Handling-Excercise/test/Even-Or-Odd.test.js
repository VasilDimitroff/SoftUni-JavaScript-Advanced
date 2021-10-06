const isOddOrEven = require('../Even-Or-Odd');
const { assert } = require('chai');

describe('Test Even or Odd functionallity', () => {
    it('Should return even when string length is 4', () => {
        let expected = 'even';
        let actual  = isOddOrEven('test');

        assert.equal(actual, expected);
    });

    it('Should return odd when string length is 5', () => {
        let expected = 'odd';
        let actual  = isOddOrEven('test1');

        assert.equal(actual, expected);
    });

    it('Should return undefined when pass number', () => {
        let expected = undefined;
        let actual  = isOddOrEven(5);

        assert.equal(actual, expected);
    });

    it('Should return undefined when pass array', () => {
        let expected = undefined;
        let actual  = isOddOrEven(['test', 'test2']);

        assert.equal(actual, expected);
    });
});