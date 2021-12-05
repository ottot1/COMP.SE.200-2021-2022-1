import chai from "chai"
import isEmpty from "../isEmpty.js"

const expect = chai.expect

describe("Unit tests of isEmpty", () => {

    it("EMP001: One parameter is given: a letter ", () => {
        expect(isEmpty("a")).to.be.false
    });
    it("EMP002: One parameter is given: a number  ", () => {
        expect(isEmpty(1)).to.be.true
    });
    it("EMP003: One parameter is given: an array of letters", () => {
        expect(isEmpty(['a', 'b', 'c'])).to.be.false
    });
    it("EMP004: One parameter is given: an array of numbers", () => {
        expect(isEmpty([1, 2, 3])).to.be.false
    });
    it("EMP005: One parameter is given: a string", () => {
        expect(isEmpty('string')).to.be.false
    });
    it("EMP006: One parameter is given: an enum", () => {
        expect(isEmpty({ a: 1 })).to.be.false
    });
    it("EMP007: One parameter is given: an array: of numbers and letters", () => {
        expect(isEmpty(['a', 1, 'b', 2, 'c'])).to.be.false
    });
    it("EMP008: One parameter is given: null", () => {
        expect(isEmpty(null)).to.be.true
    });
    it("EMP009: One parameter is given: undefined", () => {
        expect(isEmpty(undefined)).to.be.true
    });
    it("EMP0010: Parameter is missing", () => {
        expect(isEmpty()).to.be.true
    });
    it("EMP0011: Too many parameters given", () => {
        expect(function() { isEmpty(['a', 'b', 'c'], []) }).to.throw(Error);
    });

})

