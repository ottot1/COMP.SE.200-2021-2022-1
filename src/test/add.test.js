import chai from "chai"
import add from "../add.js"

const expect = chai.expect;

// ADD001: Sum of two positive numbers 
describe("Add", () => {
    it("Sum of two positive numbers", () => {
        expect(add(6,4)).to.equal(10)
    });
})