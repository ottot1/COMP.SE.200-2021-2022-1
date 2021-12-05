import chai from "chai"
import compact from "../compact.js"

const expect = chai.expect

describe("Unit tests of compact", () => {

    it("CO01: One parameter is given: an array of letters", () => {
        expect(compact(['a','b','c'])).to.deep.equal(['a','b','c'])
    });
    it("CO02: One parameter is given: an array of numbers", () => {
        expect(compact([1,2,3])).to.deep.equal([1, 2, 3])
    });
    it("CO03: One parameter is given: an array of letters and numbers", () => {
        expect(compact(['a', 1, 'b', 2, 'c'])).to.deep.equal(['a', 1, 'b', 2, 'c'])
    });
    it("CO04: One parameter is given: an array of numbers with undefined", () => {
        expect(compact([1,2,3, undefined])).to.deep.equal([1,2,3])
    });
    it("CO05: One parameter is given: an empty array", () => {
        expect(compact([])).to.deep.equal([])
    });
    
    it("CO06: One parameter is given: an array of letters and symbols", () => {
        expect(compact(['a', '!', 'b', '&', 'c'])).to.deep.equal(['a', '!', 'b', '&', 'c'])
    });
    it("CO07: One parameter is given: an array of letters, numbers and an undefined", () => {
        expect(compact(['a',1,'b',2,'c',undefined,'d',5])).to.deep.equal(['a',1,'b',2,'c','d',5])
    });
    it("CO08: One parameter is given: an array of numbers with empty values", () => {
        expect(compact([1,'',3,'',5])).to.deep.equal([1,3,5])
    });
    it("CO09: One parameter is given: an array of characters, with a NaN", () => {
        expect(compact(['a','b','c',NaN,'d'])).to.deep.equal(['a','b','c','d'] )
    });
    it("CO10: One parameter is given: an array of numbers, with a 0", () => {
        expect(compact([0,1,2,3,4])).to.deep.equal([1, 2, 3, 4])
    });
    it("CO11: One parameter is given: an undefined", () => {
        expect(compact(undefined)).to.deep.equal([])
    });
    it("CO12: Parameters are missing", () => {
        expect(compact()).to.deep.equal([])
    });
})

