import chai from "chai"
import toString from "../toString.js"

const expect = chai.expect

describe("Unit tests of toString", () => {

    it("TS001: One parameter is given: a letter", () => {
        expect(toString('a')).to.deep.equal("a")
    });
    it("TS002: One parameter is given: two letters", () => {
        expect(toString('as')).to.deep.equal("as")
    });
    it("TS003: One parameter is given: a number", () => {
        expect(toString(1)).to.deep.equal('1')
    });
    it("TS004: One parameter is given: two numbers", () => {
        expect(toString(12)).to.deep.equal('12')
    });
    it("TS005: One parameter is given: two letters and two numbers", () => {
        expect(toString('aa12')).to.deep.equal('aa12')
    });
    it("TS006: One parameter is given: a symbol", () => {
        expect(toString('@')).to.deep.equal('@')
    });
    it("TS007: One parameter is given: an array: a number, a symbol and a letter", () => {
        expect(toString([1, '@', 'a'])).to.deep.equal('1,@,a')
    });
    it("TS008: One parameter is given: null", () => {
        expect(toString(null)).to.deep.equal('')
    });
    it("TS009: One parameter is given: an empty string", () => {
        expect(toString('')).to.deep.equal('')
    });
    it("TS0010: One parameter is given: undefined", () => {
        expect(toString(undefined)).to.deep.equal(undefined)
    });
    it("TS0011: One parameter is given: 5 letters", () => {
        expect(toString('aaaaa')).to.deep.equal("aaaaa")
    });
    it("TS0012: One parameter is given: 6 letters", () => {
        expect(toString('aaaaaa')).to.deep.equal("aaaaaa")
    });
    it("TS0013: One parameter is given: 10 letters", () => {
        expect(toString('aaaaaaaaaa')).to.deep.equal("aaaaaaaaaa")
    });
    it("TS0014: Parameter is missing", () => {
        expect(toString()).to.deep.equal("")
    });


})
