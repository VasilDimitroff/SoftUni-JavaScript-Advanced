const createCalculator = require('../createCalculator');
const { assert } = require('chai');

describe('Test calculator functionallity', () => {
    it('Should return 8', () => {

        let calculator = createCalculator();
        calculator.add(3);
        calculator.add(5);
        let expected  = 8;
        let actual = calculator.get();

        assert.equal(actual, expected);
    });

    it('Should return 26', () => {

        let calculator = createCalculator();
        calculator.add(30);
        calculator.subtract(4);
        let expected  = 26;
        let actual = calculator.get();

        assert.equal(actual, expected);
    });

    it('Should return -24', () => {

        let calculator = createCalculator();
        calculator.subtract(20);
        calculator.subtract(4);
        let expected  = -24;
        let actual = calculator.get();

        assert.equal(actual, expected);
    });

    it('Should return -16', () => {

        let calculator = createCalculator();
        calculator.add(-20);
        calculator.subtract(-4);
        let expected  = -16;
        let actual = calculator.get();

        assert.equal(actual, expected);
    });

    it('Should return -24', () => {

        let calculator = createCalculator();
        calculator.add(-20);
        calculator.add(-4);
        let expected  = -24;
        let actual = calculator.get();

        assert.equal(actual, expected);
    });

    it('Should return 10', () => {

        let calculator = createCalculator();
        calculator.add(10);
        calculator.add(0);
        calculator.subtract(0);
        let expected  = 10;
        let actual = calculator.get();

        assert.equal(actual, expected);
    });

    it('Should return NaN when input is string', () => {

        let calculator = createCalculator();
        calculator.add('test');
        let actual = calculator.get();

        assert.isNaN(actual);
    });
});