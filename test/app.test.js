const chai = require("chai");
const expect = chai.expect;

describe("Server Test", function () {

    it("should return status 200 from root route", async function () {

        const res = await fetch("http://localhost:3000/");

        expect(res.status).to.equal(200);

    });

});