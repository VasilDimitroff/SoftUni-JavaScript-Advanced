const cinema = require('../Cinema/cinema');
const { assert, expect } = require('chai');

describe("Tests cinema functionality …", function() {
    describe("Test showMovies function", function() {
        it("Return No movies to show when array length is zero", function() {
            let expectedResult = 'There are currently no movies to show.';
            let actualResult = cinema.showMovies([]);
            expect(expectedResult).to.equal(actualResult);
        });

        it("Return one movie when is correct", function() {
            let input = ['Spiderman'];
            let expectedResult = input.join(', ');
            let actualResult = cinema.showMovies(input);
            assert.equal(actualResult, expectedResult);
        });

        it("Return three movies separated by comma when is correct", function() {
            let input = ['King Kong', 'The Tomorrow War', 'Joker'];
            let expectedResult = input.join(', ');
            let actualResult = cinema.showMovies(input);
           expect(expectedResult).to.equal(actualResult);
           // assert.equal(actualResult, expectedResult);
        });
     });

     describe("Test ticketPrice function", function() {
        it("Return 12.00 when projectionType is Premiere", function() {
            let expectedResult = 12.00;
            let actualResult = cinema.ticketPrice('Premiere');
            assert.equal(actualResult, expectedResult);
        });

        it("Return 7.50 when projectionType is Normal", function() {
            let expectedResult = 7.50;
            let actualResult = cinema.ticketPrice('Normal');
            assert.equal(actualResult, expectedResult);
        });

        it("Return 5.50 when projectionType is Discount", function() {
            let expectedResult = 5.50;
            let actualResult = cinema.ticketPrice('Discount');
            assert.equal(actualResult, expectedResult);
        });

        it("Throw exception when projection Type not exist", function() {
            assert.throw(() => cinema.ticketPrice('some random string'));
        });
     });

     describe("Test swapSeatsInHall function", function() {
        it("Return success message when seats number are correct", function() {
            let expectedResult = 'Successful change of seats in the hall.';
            let actualResult = cinema.swapSeatsInHall(1, 2);
            assert.equal(actualResult, expectedResult);
        });

        it("Return error message when first seat is a string", function() {
            let expectedResult = 'Unsuccessful change of seats in the hall.';
            let actualResult = cinema.swapSeatsInHall('1', 2);
            assert.equal(actualResult, expectedResult);
        });

        it("Return error message when first seat is a double", function() {
            let expectedResult = 'Unsuccessful change of seats in the hall.';
            let actualResult = cinema.swapSeatsInHall(2.3, 2);
            assert.equal(actualResult, expectedResult);
        });

        it("Return error message when first seat is negative number", function() {
            let expectedResult = 'Unsuccessful change of seats in the hall.';
            let actualResult = cinema.swapSeatsInHall(-1, 2);
            assert.equal(actualResult, expectedResult);
        });

        it("Return error message when first seat is zero", function() {
            let expectedResult = 'Unsuccessful change of seats in the hall.';
            let actualResult = cinema.swapSeatsInHall(0, 2);
            assert.equal(actualResult, expectedResult);
        });

        it("Return error message when first seat is greater than 20", function() {
            let expectedResult = 'Unsuccessful change of seats in the hall.';
            let actualResult = cinema.swapSeatsInHall(21, 2);
            assert.equal(actualResult, expectedResult);
        });

        it("Return error message when second seat is a string", function() {
            let expectedResult = 'Unsuccessful change of seats in the hall.';
            let actualResult = cinema.swapSeatsInHall(1, '2');
            expect(expectedResult).to.equal(actualResult);
            assert.equal(actualResult, expectedResult);
        });
        
        it("Return error message when second seat is a double", function() {
            let expectedResult = 'Unsuccessful change of seats in the hall.';
            let actualResult = cinema.swapSeatsInHall(2, 2.3);
            expect(expectedResult).to.equal(actualResult);
        });

        it("Return error message when second seat is negative number", function() {
            let expectedResult = 'Unsuccessful change of seats in the hall.';
            let actualResult = cinema.swapSeatsInHall(1, -2);
            expect(expectedResult).to.equal(actualResult);
        });

        it("Return error message when second seat is zero", function() {
            let expectedResult = 'Unsuccessful change of seats in the hall.';
            let actualResult = cinema.swapSeatsInHall(1, 0);
            expect(expectedResult).to.equal(actualResult);
        });

        it("Return error message when second seat is greater than 20", function() {
            let expectedResult = 'Unsuccessful change of seats in the hall.';
            let actualResult = cinema.swapSeatsInHall(1, 21);
            expect(expectedResult).to.equal(actualResult);
        });

        it("Return error message when second seat is equal to first seat", function() {
            let expectedResult = 'Unsuccessful change of seats in the hall.';
            let actualResult = cinema.swapSeatsInHall(1, 1);
            expect(expectedResult).to.equal(actualResult);
        });

        it("Return error message when first seat is 10 as string and second seat is 10 as int", function() {
            let expectedResult = 'Unsuccessful change of seats in the hall.';
            let actualResult = cinema.swapSeatsInHall('10', 10);
            expect(expectedResult).to.equal(actualResult);
        });
     });
});