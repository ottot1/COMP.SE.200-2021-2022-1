import chai from "chai"
import map from "../map.js"
import isDate from "../isDate.js"
import toString from "../toString.js"

const expect = chai.expect

function square(n) {
    return n * n
}

describe("Unit tests of map.js", () => {
    it("MAP001:	A number array and square function given as parameters", () => {
        expect(map([4,8], square)).to.deep.equal([16,64])
    });

    // Behaves differently as expected: returns array of NaN 
    it("MAP002: An array containing non-number-values and square function given as parameters", () => {
        expect(map(['a', 'b', 'c'], square)).to.deep.equal([NaN, NaN, NaN])
    });

    // Slight change to parameters (octal literal problem)
    it("MAP003: A Date array and isDate function given as parameters", () => {
        expect(map([new Date, new Date(1991, 3, 3)], isDate)).to.deep.equal([true, true])
    });

    it("MAP004: An array containg non-Date objects and isDate function given as parameters", () => {
        expect(map([new Date, null, 1011970], isDate)).to.deep.equal([true, false, false])
    });

    it("MAP005:	An array containg numbers and toString method given as parameters", () => {
        expect(map([12, 50, 101], toString)).to.deep.equal(['12', '50', '101'])
    });

    // Behaves differently as expected: returns an empty array
    it("MAP006: No parameters are given", () => {
        expect(map()).to.deep.equal([])
    });

    // Behaves differently as expected: splits string into characters (string is treated as a char array)
    it("MAP007: A string is given as the first parameter", () => {
        expect(map('testi', toString)).to.deep.equal(['t', 'e', 's', 't', 'i'])
    });

    it("MAP008: A non-function value is given as the second parameter", () => {
        expect(function() { map([12, 50, 101], "toStringTesting"); }).to.throw(TypeError)
    });

    // Behaves differently as expected, null gives an empty array
    it("MAP009: Null value is given as the first parameter", () => {
        expect(map(null, toString)).to.deep.equal([])
    });

    it("MAP010: Null value is given as the second parameter", () => {
        expect(function() { map([12, 50, 101], null); }).to.throw(TypeError)
    });

    it("MAP011:	Only one parameter (an array) is given", () => {
        expect(function() { map([12, 50, 101]); }).to.throw(TypeError)
    });

    it("MAP012: An empty array given as the first parameter", () => {
        expect(map([], toString)).to.deep.equal([])
    });

    it("MAP013: An array containing one value given as the first parameter", () => {
        expect(map([1], toString)).to.deep.equal(['1'])
    });

    // Changed second argument from toString to square
    // Reduced length of array to 1 000 000 to speed up test
    it("MAP014:	A number array with 1000000 values given as the first parameter", () => {
        let bigArray = new Array(1000000)
        let bigArraySquared = new Array(1000000)
        
        for (let i = 0; i < bigArray.length; i++) 
        {
            bigArray[i] = 4
            bigArraySquared[i] = 16
        }

        expect(map(bigArray, square)).to.deep.equal(bigArraySquared)
    });

    // New tests
    it("MAP015:	Only one parameter (a function) is given", () => {
        expect(function() { map(toString); }).to.throw(TypeError)
    });

    it("MAP016:	A Date object and square function given as parameters", () => {
        expect(map(new Date, square)).to.deep.equal([undefined])
    });

    it("MAP017:	A third parameter is given", () => {
        expect(map([4,8], square, square)).to.deep.equal([16,64])
    });
})