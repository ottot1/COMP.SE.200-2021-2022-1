import chai from "chai"
import isDate from "../isDate.js"

const expect = chai.expect

describe("Unit tests of isDate.js", () => {
    console.log(isDate())

    it("DATE001: New Date() object given as parameter", () => {
        expect(isDate(new Date())).to.be.true
    });

    it("DATE002: Date.now() given as parameter (returns a numeric presentation of date)", () => {
        expect(isDate(Date.now())).to.be.false
    });

    it("DATE003: New Date('March 3, 1991 01:21:00') object given as parameter", () => {
        expect(isDate(new Date('March 3, 1991 01:21:00'))).to.be.true
    });

    it("DATE004: New Date('1991-03-03T01:21:00') object given as parameter", () => {
        expect(isDate(new Date ('1991-03-03T01:21:00'))).to.be.true
    });

    // Parameters changed: 03 was interpreted as an octal literal
    it("DATE005: New Date(1991, 3, 3) object given as parameter", () => {
        expect(isDate(new Date(1991, 3, 3))).to.be.true
    });

    // Same as above
    it("DATE006: New Date(1991, 3, 3, 1, 21, 0) object given as parameter", () => {
        expect(isDate(new Date(1991, 3, 3, 1, 21, 0))).to.be.true
    });

    it("DATE007: New Date(628021800000) object given as parameter", () => {
        expect(isDate(new Date(628021800000))).to.be.true
    }); 

    it("DATE008: A string that is resembling date is given as a parameter", () => {
        expect(isDate('Mon April 23 2012')).to.be.false
    }); 

    it("DATE009: A number that is resembling date is given as a parameter", () => {
        expect(isDate(12042021)).to.be.false
    }); 

    // Result different than expected: Invalid Date is still a Date object
    it("DATE010: New invalid Date('Meerch 3, 1991 01:21:00') object is given as a parameter", () => {
        expect(isDate(new Date('Meerch 3, 1991 01:21:00'))).to.be.true
    }); 

    // Same as above
    it("DATE011: New invalid Date(1991, 15, 13) object is given as a parameter", () => {
        expect(isDate(new Date(1991, 15, 13))).to.be.true
    }); 

    // Returns false instead of exception
    it("DATE012: No parameter is given", () => {
        expect(isDate()).to.be.false
    }); 

    it("DATE013: Null value given as a parameter", () => {
        expect(isDate(null)).to.be.false
    }); 

    // New tests
    it("DATE014: Two parameters (new Date(), 123) given", () => {
        expect(isDate(new Date(), 123)).to.be.true
    });

    it("DATE015: Two parameters (123, new Date()) given", () => {
        expect(isDate(123, new Date())).to.be.false
    });

    it("DATE016: A Date object array given as a parameter", () => {
        expect(isDate([new Date(), new Date(), new Date()])).to.be.false
    });
})