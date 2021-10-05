const rgbToHexColor = require('../rgbToHexColor');
const { assert } = require('chai');

describe('Test rgbToHexColor functionallity', () => {
    it('Should return Hex color correctly', () => {
        let expected  = ('#0c1891').toUpperCase();
        let actual = rgbToHexColor(12, 24, 145);

        assert.equal(actual, expected);
    });

    it('Should return undefined when red color is not correct', () => {
        let expected  = undefined;
        let actual = rgbToHexColor(312, 24, 145);

        assert.equal(actual, expected);
    });

    it('Should return undefined when green color is not correct', () => {
        let expected  = undefined;
        let actual = rgbToHexColor(112, 424, 145);

        assert.equal(actual, expected);
    });

    it('Should return undefined when blue color is not correct', () => {
        let expected  = undefined;
        let actual = rgbToHexColor(112, 232, 545);

        assert.equal(actual, expected);
    });

    it('Should return undefined when red type not correct', () => {
        let expected  = undefined;
        let actual = rgbToHexColor('someString', 232, 545);

        assert.equal(actual, expected);
    });

    it('Should return undefined when green type not correct', () => {
        let expected  = undefined;
        let actual = rgbToHexColor(232, 'someString', 545);

        assert.equal(actual, expected);
    });

    it('Should return undefined when blue type not correct', () => {
        let expected  = undefined;
        let actual = rgbToHexColor(232, 545, 'someString');

        assert.equal(actual, expected);
    });

    it('Should return undefined when input type is undefined or null', () => {
        let expected  = undefined;
        let actual = rgbToHexColor(232, 545, undefined);

        let expected2  = undefined;
        let actual2 = rgbToHexColor(232, 545, null);

        assert.equal(actual, expected);
        assert.equal(actual2, expected2);
    });

    it('Should return undefined when input type is only one argument', () => {
        let expected  = undefined;
        let actual = rgbToHexColor(232);
        assert.equal(actual, expected);
    });

    it('Should return undefined when blue type negative number', () => {
        let expected  = undefined;
        let actual = rgbToHexColor(232, 545, -1);

        assert.equal(actual, expected);
    });

    it('Should return undefined when green type negative number', () => {
        let expected  = undefined;
        let actual = rgbToHexColor(232, -1, 1);

        assert.equal(actual, expected);
    });

    it('Should return undefined when red type negative number', () => {
        let expected  = undefined;
        let actual = rgbToHexColor(-1, 232, 1);

        assert.equal(actual, expected);
    });

    it('Should return Hex color correctly', () => {
        let expected  = ('#000000').toUpperCase();
        let actual = rgbToHexColor(0, 0, 0);

        assert.equal(actual, expected);
    });
});