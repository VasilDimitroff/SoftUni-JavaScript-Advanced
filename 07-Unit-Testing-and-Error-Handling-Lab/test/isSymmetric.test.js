const isSymmetric = require('../isSymmetric');
const { assert } = require('chai');

describe('check for symmetry functionallity', () =>
{
    it('should return true when array is symmetric', () => {
        let input =[4, 3, 4];

        let expected = true;
        let actual = isSymmetric(input);

        assert.equal(actual, expected);
    });

    it('should return false when array is not symmetric', () => {
        let input =[4, 3, 6];

        let expected = false;
        let actual = isSymmetric(input);

        assert.equal(actual, expected);
    });

    it('should return false when input is null or undefined', () => {
        let input = null;
        let input2 = undefined;

        let expected = false;
        let actual = isSymmetric(input);
        let actual2 = isSymmetric(input2);

        assert.equal(actual, expected);
        assert.equal(actual2, expected);
    });

    it('should return true when input is with strings', () => {
        let input = ['test', 'something new', 'test'];

        let expected = true;
        let actual = isSymmetric(input);

        assert.equal(actual, expected);
    });

    it('should return false when input is object', () => {
        let input = {};

        let expected = false;
        let actual = isSymmetric(input);

        assert.equal(actual, expected);
    });
});