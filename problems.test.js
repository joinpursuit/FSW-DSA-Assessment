const { multiply, arraySquare, recursiveSum } = require('./problems.js');

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
    test("Is recursive", () => {
        let mocked = jest.fn((arr) => {console.log(arr)})
        let result = recursiveSum([1,2,3,4,5])
        console.log(mocked.mock.calls)
    })
})