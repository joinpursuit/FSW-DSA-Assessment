const { multiply, arraySquare, recursiveSum, integerRange, inputSum } = require('./problems.js');


describe("Question 1", () => {
    test("Returns anything", () => {
        expect(multiply(5,10)).toBeDefined()
    })

    test("Returns the right value", () => {
        expect(multiply(5,10)).toBe(50)
        expect(multiply(1, 235)).toBe(235)
        expect(multiply(-5, 18)).toBe(-90)
    })
})

describe("Question 2", () => {
    test("Returns an array", () => {
        expect(arraySquare([1,3,5,8])).toBeInstanceOf(Array)
    })

    test("Returns the correct values in an array", () => {
        expect(arraySquare([1,3,5,8])).toEqual([1,9,25,64])
        expect(arraySquare([-3,5,11,244])).toEqual([9,25,121,59536])
    })
})

describe("Question 3", () => {
    test("Returns an integer", () => {
        // toBeInstanceOf(Number) doesnt work for ints?
        expect(recursiveSum([1,2,3,4,5])).toEqual(expect.any(Number))
    })

    test("Is written recursively", () => {
        let stringed = recursiveSum.toString()
        let re = new RegExp(/recursiveSum\(/, 'gi')
        let matches = stringed.match(re)
        expect(matches.length).toBeGreaterThan(1)
    })

    test("Returns the correct value", () => {
        expect(recursiveSum([1,2,3,4,5])).toEqual(15)
        expect(recursiveSum([-5,-3,1,-243])).toEqual(-250)
    })
})

describe("Question 4", () => {
    test("Returns an integer", () => {
        expect(integerRange(1, 10)).toEqual(expect.any(Number))
    })

    test("Returns the correct value", () => {
        expect(integerRange(1, 10)).toBe(8)
        expect(integerRange(-203, 816)).toBe(815)
    })
})

describe("Question 5", () => {
    test("Returns a boolean", () => {
        expect(inputSum([1,2,3], 2)).toBeBoolean()
    })
    test("Returns the right value", () => {
        expect(inputSum([1, 3, 5, 4, 2], 2)).toBe(false)
        expect(inputSum([1, 3, 5, 4, 2], 7)).toBe(true)
    })
})