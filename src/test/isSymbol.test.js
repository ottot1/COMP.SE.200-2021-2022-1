import chai from "chai"
import isSymbol from "../isSymbol.js"

const expect = chai.expect

describe("Unit tests of isSymbol", () => {

    it("ISSY001: One parameter is given: a symbol ! ", () => {
        expect(isSymbol(Symbol('!'))).to.be.true
    });
    it("ISSY002: One parameter is given: a symbol ?  ", () => {
        expect(isSymbol(Symbol('?'))).to.be.true
    });
    it("ISSY003: One parameter is given: a symbol & ",() => {
        expect(isSymbol(Symbol('&'))).to.be.true
    });
    it("ISSY004: One parameter is given: a symbol @",() => {
        expect(isSymbol(Symbol('@'))).to.be.true
    });
    it("ISSY005: One parameter is given: a letter", () => {
        expect(isSymbol('a')).to.be.false
    });
    it("ISSY006: One parameter is given: two letters", () => {
        expect(isSymbol('aa')).to.be.false
    });
    it("ISSY007: One parameter is given: an array: a number, a sumbol and a letter", () => {
        expect(isSymbol([1, '@', 'a'])).to.be.false
    });
    it("ISSY008: One parameter is given: null", () => {
        expect(isSymbol(null)).to.be.false
    });
    it("ISSY009: One parameter is given: an empty string", () => {
        expect(isSymbol('')).to.be.false
    });
    it("ISSY0010: One parameter is given: -0", () => {
        expect(isSymbol(-0)).to.be.false
    });
    it("ISSY0011: One parameter is given: undefined", () => {
        expect(isSymbol(undefined)).to.be.false
    });
    it("ISSY0012: Parameter is missing", () => {
        expect(isSymbol()).to.be.false
    });
    it("ISSY0013: Too many parameters given", () => {
        expect(function() { isSymbol('!','%'); }).to.throw(Error);
    });
})