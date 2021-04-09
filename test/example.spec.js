/* eslint-disable no-unreachable */
/* eslint-disable indent */
const expect = require('chai').expect;

// Require Module to be tested and any testing inputs
const moduleName = require('../src/module-location.js');

// Test Suite w/ at least one test case
describe('Unambiguious description, yet short, but sweet,', () => {
    // Test Specifications/Case here, don't forget corner cases!
        //example: exclusive server endpoint test case
    it.only('GET / responds with 200 containing "Hello, world!"', () => {
        return supertest(app)
            .get('/')
            .expect(200, 'Hello, world!');
        });

        // example: commonly abbreviated test case with skipped test case
    it.skip('should divide positive integers correctly', () => {
        expect(divide(8, 4)).to.equal(2);
        });

    // 'Describes explicity what should occur
    it('should do some function here like number types together', () => {
        // actual specification code/logic below:

        // 1 Define inputs
        const a = 1, b = 3, expectedAnswer = 4;

        /* 2 Invoke the function being tested with inputs
            NOTE: To avoid any normal exception handling,
            wrap tested function in another function */
        const actualAnswer = () => a + b;

        /* 3 Make assertion (i.e.that expected is explicity
            equal (===) actual */
        expect(actualAnswer).to.equal(expectedAnswer);
    });
});
