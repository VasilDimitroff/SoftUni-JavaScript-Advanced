const mathEnforcer = require('../Math-Enforcer');
const { assert } = require('chai');

describe('Test math enforcer functionallity', () => {

    it('Should return 8 when start Num is 3', () => {
        let startNum = 3;
        let expected = 8;
        let actual = mathEnforcer.addFive(startNum);

        assert.equal(actual, expected);
    });

    it('Should return 2 when start Num is -3', () => {
        let startNum = -3;
        let expected = 2;
        let actual = mathEnforcer.addFive(startNum);

        assert.equal(actual, expected);
    });

    it('Should return 8.5 when start Num is 3.5', () => {
        let startNum = 3.5;
        let expected = 8.5;
        let actual = mathEnforcer.addFive(startNum);

        assert.equal(actual, expected);
    });

    it('Should return 8.2 when start Num is 3.2', () => {
        let startNum = 3.2;
        let expected = 8.2;
        let actual = mathEnforcer.addFive(startNum);

        assert.equal(actual, expected);
    });

    it('Should return undefined when start Num is string', () => {
        let startNum = 'someString';
        let expected = undefined;
        let actual = mathEnforcer.addFive(startNum);

        assert.equal(actual, expected);
    });

    it('Should return 3 when start Num is 13', () => {
        let startNum = 13;
        let expected = 3;
        let actual = mathEnforcer.subtractTen(startNum);

        assert.equal(actual, expected);
    });

    it('Should return 0.5 when start Num is 10.5', () => {
        let startNum = 10.5;
        let expected = 0.5;
        let actual = mathEnforcer.subtractTen(startNum);

        assert.equal(actual, expected);
    });

    it('Should return 0 when start Num is 10', () => {
        let startNum = 10;
        let expected = 0;
        let actual = mathEnforcer.subtractTen(startNum);

        assert.equal(actual, expected);
    });

    it('Should return -20 when start Num is -10', () => {
        let startNum = -10;
        let expected = -20;
        let actual = mathEnforcer.subtractTen(startNum);

        assert.equal(actual, expected);
    });

    it('Subtract Ten should return undefined when start Num is string', () => {
        let startNum = 'someString';
        let expected = undefined;
        let actual = mathEnforcer.subtractTen(startNum);

        assert.equal(actual, expected);
    });

    it('Sum should return undefined when first Num is string', () => {
        let firstNum = 'someString';
        let secondNum = 5;
        let expected = undefined;
        let actual = mathEnforcer.sum(firstNum, secondNum);

        assert.equal(actual, expected);
    });

    it('Sum should return undefined when second Num is string', () => {
        let firstNum = 2;
        let secondNum = 'someString';
        let expected = undefined;
        let actual = mathEnforcer.sum(firstNum, secondNum);

        assert.equal(actual, expected);
    });

    it('Sum should return 7 when furst num is 3 and second is 4', () => {
        let firstNum = 3;
        let secondNum = 4;
        let expected = 7;
        let actual = mathEnforcer.sum(firstNum, secondNum);

        assert.equal(actual, expected);
    });

    it('Sum should return -7 when furst num is -3 and second is -4', () => {
        let firstNum = -3;
        let secondNum = -4;
        let expected = -7;
        let actual = mathEnforcer.sum(firstNum, secondNum);

        assert.equal(actual, expected);
    });

    it('Sum should return -1 when furst num is 3 and second is -4', () => {
        let firstNum = 3;
        let secondNum = -4;
        let expected = -1;
        let actual = mathEnforcer.sum(firstNum, secondNum);

        assert.equal(actual, expected);
    });

    it('Sum should return -26 when furst num is -30 and second is 4', () => {
        let firstNum = -30;
        let secondNum = 4;
        let expected = -26;
        let actual = mathEnforcer.sum(firstNum, secondNum);

        assert.equal(actual, expected);
    });

    it('Sum should return 7.7 when furst num is 3.5 and second is 4.2', () => {
        let firstNum = 3.5;
        let secondNum = 4.2;
        let expected = 7.7;
        let actual = mathEnforcer.sum(firstNum, secondNum);

        assert.equal(actual, expected);
    });
});