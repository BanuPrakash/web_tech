var compute = require('../app/compute');
var expect = require('chai').expect;

// test suite
describe("testing compute module", () => {
    // test spec for testing add 
    it("add test", () => {
        var result = compute.add(4,5); // Action
        var expected = 9;
        expect(result).to.be.equal(expected); // Assertion
    });

     // test spec for testing add 
     it("subtract test", () => {
        var result = compute.subtract(10,4);
        var expected = 6;
        expect(result).to.be.equal(expected);
    });

});