const sum = require('../sum');
const { assert } = require('chai');

describe('Test sum functionallity', () => {
    it('Should return sum correctly', () => {
        let input = [1, 2, 3];
        let expected  = 6;
        let actual = sum(input);

        assert.equal(actual, expected);
    })
});