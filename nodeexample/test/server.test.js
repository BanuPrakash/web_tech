const request = require('request');
var expect = require('chai').expect;
describe("testing server module", () => {
    // testing async code
    it("testing add operation", (done) => {
        var expected = "25";
        request('http://localhost:1234/add?x=10&y=15', function (error, response, body) {
            expect(body).to.be.equal(expected);
            done();
        });
    })
});