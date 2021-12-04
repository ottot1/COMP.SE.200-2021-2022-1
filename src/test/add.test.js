import chai from "chai"
import add from "../add.js"

const expect = chai.expect

describe("Unit tests of add.js", () => {
    it("ADD001: Sum of two positive numbers", () => {
        expect(add(6,4)).to.equal(10)
    });

    it("ADD002: Sum of two negative numbers", () => {
        expect(add(-5,-3)).to.equal(-8)
    });

    it("ADD003: Sum of zero and positive number", () => {
        expect(add(0,4)).to.equal(4)
    });

    it("ADD004: Sum of positive number and zero", () => {
        expect(add(4,0)).to.equal(4)
    });

    it("ADD005: Sum of zero and negative number", () => {
        expect(add(0,-6)).to.equal(-6)
    });

    it("ADD006: Sum of negative number and zero", () => {
        expect(add(-6,0)).to.equal(-6)
    });

    it("ADD007: Sum of negative and positive number", () => {
        expect(add(-4,6)).to.equal(2)
    });

    it("ADD008: Sum of positive and negative number", () => {
        expect(add(4,-6)).to.equal(-2)
    });

    it("ADD009: Sum of positive decimal numbers", () => {
        expect(add(0.05,0.47)).to.equal(0.52)
    });

    it("ADD010: Sum of negative decimal numbers", () => {
        expect(add(-1.04,-2.11)).to.equal(-3.15)
    });

    it("ADD011: Sum of maximum value of number and positive number", () => {
        expect(add(Number.MAX_VALUE,100)).to.equal(Number.MAX_VALUE)
    });

    it("ADD012: Sum of maximum value of number and negative number", () => {
        expect(add(Number.MAX_VALUE,-500)).to.equal(Number.MAX_VALUE)
    });

    it("ADD013: Sum of negative maximum value of number and positive number", () => {
        expect(add(-Number.MAX_VALUE,100)).to.equal(-Number.MAX_VALUE)
    });

    it("ADD014: Sum of negative maximum value of number and negative number", () => {
        expect(add(-Number.MAX_VALUE,-500)).to.equal(-Number.MAX_VALUE)
    });

    it("ADD015: Only one parameter is given", () => {
        expect(add(500)).to.equal(500)
    });

    it("ADD016: Both parameters are missing", () => {
        expect(add()).to.equal(0)
    });

    it("ADD017: Null given as second parameter", () => {
        expect(add(500,null)).to.equal(500)
    });

    it("ADD018: Null given as first parameter", () => {
        expect(add(null,500)).to.equal(500)
    });

    it("ADD019: Null given as both parameters", () => {
        expect(add(null,null)).to.equal(0)
    });

    it("ADD020: String given as the first parameter", () => {
        expect(add("car",5)).to.equal("car5")
    });

    it("ADD021: String given as the second parameter", () => {
        expect(add(5,"car")).to.equal("5car")
    });    

    it("ADD022: String given as both parameters", () => {
        expect(add("summer","time")).to.equal("summertime")
    });    

    // New tests:
    it("ADD023: Sum of maximum value of number and negative maximum value of number", () => {
        expect(add(Number.MAX_VALUE,-Number.MAX_VALUE)).to.equal(0)
    });

    it("ADD024: Sum of maximum value of number and maximum value of number", () => {
        expect(add(Number.MAX_VALUE,Number.MAX_VALUE)).to.equal(Number.POSITIVE_INFINITY)
    });

    it("ADD025: Sum of maximum safe integer and negative number", () => {
        expect(add(Number.MAX_SAFE_INTEGER, -1)).to.equal(9007199254740990)
    });

    it("ADD026: Sum of negative maximum safe integer and negative number", () => {
        expect(add(Number.MIN_SAFE_INTEGER, 1)).to.equal(-9007199254740990)
    });

    it("ADD027: Sum of positive infinity and a positive number", () => {
        expect(add(Number.POSITIVE_INFINITY, 100)).to.equal(Number.POSITIVE_INFINITY)
    });

    it("ADD028: Sum of positive infinity and a negative number", () => {
        expect(add(Number.POSITIVE_INFINITY, -6000)).to.equal(Number.POSITIVE_INFINITY)
    });

    it("ADD029: Sum of NaN and a positive number", () => {
        expect(add(Number.NaN, 1000)).to.be.NaN
    });

    it("ADD030: Sum of a negative number and NaN", () => {
        expect(add(-5000, Number.NaN)).to.be.NaN
    });

    it("ADD031: Too many parameters given", () => {
        expect(function() { add(1,2,3); }).to.throw(Error);
    });

    it("ADD032: Number array given as the first parameter", () => {
        expect(add([1,2,3], 1)).to.be.NaN
    });

    it("ADD033: Object given as the first parameter", () => {
        expect(add({"name": "Lisa"}, 1)).to.be.NaN
    });
})