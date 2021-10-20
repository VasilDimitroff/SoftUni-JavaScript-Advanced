const testNumbers = require('../03/testNumbers');
const assert = require('chai').assert;

describe("Test Numbers functionallity", function() {
    describe("sumNumbers tests", function() {
        it("Should return 5.00 when pass correct values", function() {
           let expected = 5.00;
           let actualResult = testNumbers.sumNumbers(2,3);
           assert.equal(expected, actualResult);
        });

        it("Should return 5.75 when pass correct values", function() {
         let expected = 5.75;
         let actualResult = testNumbers.sumNumbers(2.25,3.50);
         assert.equal(expected, actualResult);
       });

        it("Should return undefined when first number is not number", function() {
         let expected = undefined;
         let actualResult = testNumbers.sumNumbers('2',3);
         assert.equal(expected, actualResult);
       });

      it("Should return undefined when second number is not number", function() {
         let expected = undefined;
         let actualResult = testNumbers.sumNumbers(2,'3');
         assert.equal(expected, actualResult);
       });

       it("Should return undefined when first and second number is not number", function() {
         let expected = undefined;
         let actualResult = testNumbers.sumNumbers('2','3');
         assert.equal(expected, actualResult);
       });

     });

     describe("numberChecker tests", function() {
      it("Should return The number is even! when pass 4 as string", function() {
         let expected = 'The number is even!';
         let actualResult = testNumbers.numberChecker('4');
         assert.equal(expected, actualResult);
      });

      it("Should return The number is even! when pass 4 as number", function() {
         let expected = 'The number is even!';
         let actualResult = testNumbers.numberChecker(4);
         assert.equal(expected, actualResult);
      });

      it("Should return The number is odd! when pass 4.20 as string", function() {
         let expected = 'The number is odd!';
         let actualResult = testNumbers.numberChecker('4.20');
         assert.equal(expected, actualResult);
      });

      it("Should return The number is odd! when pass 4.20 as number", function() {
         let expected = 'The number is odd!';
         let actualResult = testNumbers.numberChecker(4.20);
         assert.equal(expected, actualResult);
      });

      it("Should return The number is odd! when pass 5 as string", function() {
         let expected = 'The number is odd!';
         let actualResult = testNumbers.numberChecker('5');
         assert.equal(expected, actualResult);
      });

      it("Should return The number is odd! when pass 5 as number", function() {
         let expected = 'The number is odd!';
         let actualResult = testNumbers.numberChecker(5);
         assert.equal(expected, actualResult);
      });

      it("Should return The number is odd! when pass 5.25 as number", function() {
         let expected = 'The number is odd!';
         let actualResult = testNumbers.numberChecker(5.25);
         assert.equal(expected, actualResult);
      });

      it("Should return The number is odd! when pass 5.25 as string", function() {
         let expected = 'The number is odd!';
         let actualResult = testNumbers.numberChecker('5.25');
         assert.equal(expected, actualResult);
      });

      it("Should throw Error when pass NaN", function() {
         assert.throw(() => testNumbers.numberChecker('somestring'));
      });
   });

   describe("averageSumArray tests", function() {
      it("Should return 4 when pass array of nums", function() {
         let expected = 4;
         let actualResult = testNumbers.averageSumArray([2, 4, 6]);
         assert.equal(expected, actualResult);
      });
   });

});