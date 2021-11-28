import chai from "chai"
import isObjectLike from "../isObjectLike.js"

const expect = chai.expect

describe("Unit tests of isObjectLike.js", () => {
    it("IOL001: Empty dictionary given as a parameter", () => {
        expect(isObjectLike({})).to.be.true
    });

    it("IOL002: Dictionary with key-value pairs given as a parameter", () => {
        expect(isObjectLike({test1: 'abc', test2: 'def'})).to.be.true
    });

    it("IOL003: Empty array given as a parameter", () => {
        expect(isObjectLike([])).to.be.true
    });

    it("IOL004: Array with values given as a parameter", () => {
        expect(isObjectLike([1, 2, 3])).to.be.true
    });

    it("IOL005: Function given as a parameter", () => {
        const testFunction = () => {console.log("Test function")}
        expect(isObjectLike(testFunction)).to.be.false
    });

    it("IOL006: Null value given as a parameter", () => {
        expect(isObjectLike(null)).to.be.false
    });

    it("IOL007: Number given as a parameter", () => {
        expect(isObjectLike(45)).to.be.false
    });

    it("IOL008: String given as a parameter", () => {
        expect(isObjectLike("qwerty")).to.be.false
    });

    it("IOL009: Date object given as a parameter", () => {
        expect(isObjectLike(new Date())).to.be.true
    });

    it("IOL010: No parameter is given", () => {
        expect(isObjectLike()).to.be.false
    });    

    // New tests:
    it("IOL011: Anonymous function given as a parameter", () => {
        expect(isObjectLike(() => {console.log("Test function")})).to.be.false
    });

    it("IOL012: Two parameters ([1,2,3], 'car') are given", () => {
        expect(isObjectLike([1,2,3], 'car')).to.be.true
    });

    it("IOL013: Two parameters ('car', [1,2,3]) are given", () => {
        expect(isObjectLike('car', [1,2,3])).to.be.false
    }); 
})