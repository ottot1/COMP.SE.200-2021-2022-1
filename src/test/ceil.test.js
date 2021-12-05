import chai from "chai"
import ceil from "../ceil.js"

const expect = chai.expect

describe("Unit tests of ceil", () => {

    it("CEI001: Two parameters are given, a number: 7.001 and a precision of: 2", () => {
        expect(ceil(7.001, 2)).to.deep.equal(7.01)
    });
    it("CEI002: Two parameters are given, a number: 5.10 and a precision of: 1", () => {
        expect(ceil(5.10, 1)).to.deep.equal(5.10)
    });
    it("CEI003: Two parameters are given, a number: 12.17100 and a precision of: 2", () => {
        expect(ceil(12.17100, 2)).to.deep.equal(12.18)
    });
    it("CEI004: Two parameters are given, a number: 7040 and a precision of: -2", () => {
        expect(ceil(7040, -2)).to.deep.equal(7100)
    });
    it("CEI005: Two parameters are given, a number: 7040 and a precision of: 2", () => {
        expect(ceil(7040, 2)).to.deep.equal(7040)
    });
    it("CEI006: Two parameters are given, a number: 910 and a precision of: 2", () => {
        expect(ceil(910, 2)).to.deep.equal(910)
    });
    it("CEI007: Two parameters are given, a number: 6.12 and a precision of: 2", () => {
        expect(ceil(6.12, 2)).to.deep.equal(6.12)
    });
    it("CEI008: One parameter is given: 2.002", () => {
        expect(ceil(2.002)).to.deep.equal(3)
    });
    it("CEI009: One parameter is given: -2.15", () => {
        expect(ceil(-2.15)).to.deep.equal(-2)
    });
    it("CEI0010: One parameter is given: 0", () => {
        expect(ceil(0)).to.deep.equal(0)
    });
    it("CEI0011: One parameter is given: 3", () => {
        expect(ceil(3)).to.deep.equal(3)
    });
    it("CEI0012: Parameters are missing", () => {
        expect(ceil()).to.deep.equal(NaN)
    });

})

