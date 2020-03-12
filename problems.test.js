const {
  multiply,
  arraySquare,
  recursiveSum,
  integerRange,
  inputSum,
  traverseLinkedList,
  maxDepth
} = require("./problems.js")

describe("Question 1, multiply", () => {
  test("Returns anything", () => {
    expect(multiply(5, 10)).toBeDefined()
  })

  test("Returns the right value", () => {
    expect(multiply(5, 10)).toBe(50)
    expect(multiply(1, 235)).toBe(235)
    expect(multiply(-5, 18)).toBe(-90)
  })
})

describe("Question 2, square an array", () => {
  test("Returns an array", () => {
    expect(arraySquare([1, 3, 5, 8])).toBeInstanceOf(Array)
  })

  test("Returned array is the same length as original", () => {
    let beginningArray = [9, 1, 5, 2]
    let secondArray = [9, 2, 4, 6, 7, 2, 4, 1, 7, 2, 3, 5, 1112]
    expect(arraySquare(beginningArray).length).toEqual(beginningArray.length)
    expect(arraySquare(secondArray).length).toEqual(secondArray.length)
  })

  test("Returns the correct values in an array", () => {
    expect(arraySquare([1, 3, 5, 8])).toEqual([1, 9, 25, 64])
    expect(arraySquare([-3, 5, 11, 244])).toEqual([9, 25, 121, 59536])
  })
})

describe("Question 3, recursive sum", () => {
  test("Returns an integer", () => {
    // toBeInstanceOf(Number) doesnt work for ints?
    expect(recursiveSum([1, 2, 3, 4, 5])).toEqual(expect.any(Number))
  })

  test("Is written recursively", () => {
    let stringed = recursiveSum.toString()
    let re = new RegExp(/recursiveSum\(/, "gi")
    let matches = stringed.match(re)
    expect(matches.length).toBeGreaterThan(1)
  })

  test("Returns the correct value", () => {
    expect(recursiveSum([1, 2, 3, 4, 5])).toEqual(15)
    expect(recursiveSum([-5, -3, 1, -243])).toEqual(-250)
  })
})

describe("Question 4, range of integers", () => {
  test("Returns an integer", () => {
    expect(integerRange(1, 10)).toEqual(expect.any(Number))
  })

  test("Returns the correct value", () => {
    expect(integerRange(1, 10)).toBe(8)
    expect(integerRange(-203, 816)).toBe(815)
  })
})

describe("Question 5, input sum", () => {
  test("Returns a boolean", () => {
    expect(inputSum([1, 2, 3], 2)).toBeBoolean()
  })

  test("Returns the right value", () => {
    expect(inputSum([1, 3, 5, 4, 2], 2)).toBe(false)
    expect(inputSum([1, 3, 5, 4, 2], 7)).toBe(true)
  })
})

describe("Question 6, traverse linked list", () => {
  let ll1
  let ll2
  beforeAll(() => {
    class Node {
      constructor(value, next = null) {
        this.value = value
        this.next = next
      }
    }
    class LinkedList {
      constructor(val) {
        this.head = new Node(val)
        this.current = this.head
      }

      add(val) {
        this.current.next = new Node(val)
        this.current = this.current.next
      }
    }

    ll1 = new LinkedList(1)
    ll1.add(9)
    ll1.add(8)
    ll1.add(5)

    ll2 = new LinkedList(811)
    ll2.add(7822)
    ll2.add(9)
    ll2.add(113)
    ll2.add(718)
    ll2.add(456)
    ll2.add(99)
    ll2.add(10000)
    ll2.add(123456789)
  })
  test("Returns an Array", () => {
    expect(traverseLinkedList(ll1.head)).toBeInstanceOf(Array)
  })
  test("Returns the correct values", () => {
    expect(traverseLinkedList(ll1.head)).toEqual([1, 9, 8, 5])
    expect(traverseLinkedList(ll2.head)).toEqual([
      811,
      7822,
      9,
      113,
      718,
      456,
      99,
      10000,
      123456789
    ])
  })
})

describe("Question 7, max binary tree depth", () => {
  let tree1
  let tree2

  beforeAll(() => {
    class TreeNode {
      constructor(val) {
        this.val = val
        this.left = null
        this.right = null
      }
    }

    // class BinaryTree {
    //   constructor() {
    //     this.root = null
    //   }
    //   addNode(val) {
    //     if(!this.root) {
    //       this.root = new TreeNode(val)
    //     } else {

    //     }
    //   }
    // }
  })
})
