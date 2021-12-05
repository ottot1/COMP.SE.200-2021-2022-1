import chai from "chai"
import toString from "../toString.js"

const expect = chai.expect

describe("Unit tests of toString", () => {

    it("SLI001: One parameter is given: a letter", () => {
        expect(toString('a')).to.deep.equal("a")
    });
    it("SLI002: One parameter is given: two letters", () => {
        expect(toString('as')).to.deep.equal("as")
    });
    it("SLI003: One parameter is given: a number", () => {
        expect(toString(1)).to.deep.equal('1')
    });
    it("SLI004: One parameter is given: two numbers", () => {
        expect(toString(12)).to.deep.equal('12')
    });
    it("SLI005: One parameter is given: two letters and two numbers", () => {
        expect(toString('aa12')).to.deep.equal('aa12')
    });
    it("SLI006: One parameter is given: a symbol", () => {
        expect(toString('@')).to.deep.equal('@')
    });
    it("SLI007: One parameter is given: an array: a number, a sumbol and a letter", () => {
        expect(toString([1, '@', 'a'])).to.deep.equal('1,@,a')
    });
    it("SLI008: One parameter is given: null", () => {
        expect(toString(null)).to.deep.equal('')
    });
    it("SLI009: One parameter is given: an empty string", () => {
        expect(toString('')).to.deep.equal('')
    });
    it("SLI0010: One parameter is given: undefined", () => {
        expect(toString(undefined)).to.deep.equal(undefined)
    });
    it("SLI0011: One parameter is given: 5 letters", () => {
        expect(toString('aaaaa')).to.deep.equal("aaaaa")
    });
    it("SLI0012: One parameter is given: 6 letters", () => {
        expect(toString('aaaaaa')).to.deep.equal("aaaaaa")
    });
    it("SLI0013: One parameter is given: 10 letters", () => {
        expect(toString('aaaaaaaaaa')).to.deep.equal("aaaaaaaaaa")
    });
    it("SLI0014: Parameter is missing", () => {
        expect(toString()).to.deep.equal("")
    });


})
