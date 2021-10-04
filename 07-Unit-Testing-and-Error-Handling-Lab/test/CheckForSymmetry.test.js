const sum = require('../isSymmetric');
const { assert } = require('chai');

define('check for symmetry functionallity', () =>
{
    it('should return true when array is symmetric', () => {
        let input =[4, 3, 4];

        let expected = true;
        let actual = isSymmetric(input);

        assert.equal(actual, expected);
    })

});