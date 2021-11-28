import chai from "chai"
import slice from "../slice.js"

const expect = chai.expect

describe("Unit tests of slice.js", () => {
    it("SLI001: Two parameters are given: an array and start index", () => {
        expect(slice([1, 2, 3, 4], 2)).to.deep.equal([3, 4])
    });

    it("SLI002: Three parameters are given: an array, start index and end index", () => {
        expect(slice([1, 2, 3, 4], 1, 3)).to.deep.equal([2, 3])
    });

    it("SLI003: One parameter is given: an array", () => {
        expect(slice([1, 2, 3, 4])).to.deep.equal([1, 2, 3, 4])
    });

    it("SLI004: Two parameters are given: an array and start index (with negative offset)", () => {
        expect(slice([1, 2, 3, 4], -3)).to.deep.equal([2, 3, 4])
    });

    it("SLI005: Three parameters are given: an array, start index and end index (both with negative offsets)", () => {
        expect(slice([1, 2, 3, 4], -3, -1)).to.deep.equal([2, 3])
    });

    it("SLI006: Three parameters are given: an array, start index and end index (with negative offset)", () => {
        expect(slice([1, 2, 3, 4], 1, -2)).to.deep.equal([2])
    });

    it("SLI007: Three parameters are given: an array, start index (with negative offset) and end index", () => {
        expect(slice([1, 2, 3, 4], -3, 3)).to.deep.equal([2, 3])
    });

    it("SLI008: An empty array is given", () => {
        expect(slice([])).to.deep.equal([])
    });

    it("SLI009: The start index is out of array's indexes", () => {
        expect(slice([1, 2, 3, 4], 5)).to.deep.equal([])
    });

    it("SLI010: The end index is out of array's indexes", () => {
        expect(slice([1, 2, 3, 4], 1, 7)).to.deep.equal([2, 3, 4, undefined, undefined, undefined])
    });

    it("SLI011: A string given as the first parameter", () => {
        expect(slice('NonArray', 1, 3)).to.deep.equal(['o', 'n'])
    });

    it("SLI012: A non-number value given as the second parameter", () => {
        expect(slice([1, 2, 3, 4], 'one', 3)).to.deep.equal([])
    });

    it("SLI013: A non-number value given as the third parameter", () => {
        expect(slice([1, 2, 3, 4], 1, 'three')).to.deep.equal([])
    });

    it("SLI014: No parameters are given", () => {
        expect(slice()).to.deep.equal([])
    });

    it("SLI015: Null value is given as the first parameter", () => {
        expect(slice(null, 1, 3)).to.deep.equal([])
    });

    it("SLI016: Null value is given as the second parameter", () => {
        expect(slice([1, 2, 3, 4], null, 3)).to.deep.equal([1, 2, 3])
    });

    it("SLI017: Null value is given as the third parameter", () => {
        expect(slice([1, 2, 3, 4], 1, null)).to.deep.equal([])
    });

    // New tests:
    it("SLI018: A Date object given as the first parameter", () => {
        expect(slice(new Date, 1, 3)).to.deep.equal([])
    });    

    it("SLI019: Four parameters are given", () => {
        expect(slice([1, 2, 3, 4], 1, 3, 5)).to.deep.equal([2, 3])
    });
})
