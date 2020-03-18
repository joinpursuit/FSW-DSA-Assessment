# FSW DSA Assessment

This is an assessment designed to get a baseline understanding of your current knowledge and skill level. You will complete a series of problems, some of which require specific Data Structures & Algorithms knowledge.

The problems are ordered from easiest to hardest, so it's recommended you attempt them in that order.

## About Testing

This repository uses automated tests to check your answers (similar to the way leetcode and codewars operate). The tests are written using `jest`, a javascript testing framework. The number of tests you can get to pass will count as your score for the evaluation. 

All of the problems have more than 1 test, so you may be able to get partial credit even if you don't get the right answer.

## Setup

* Fork and clone this repository
* `cd` to the cloned directory
* `npm install` to install the dependencies

## Instructions

Solve each of the problems in the `problems.js` file. Each problem has its own description directly above it. Read the description and write your code in the empty function.

Run `npm test` as often as you want to see how many tests you've passed. You will start off with 0 passing. Read the output of the tests to get information about what you need to do. There is a lot of output! It can be helpful to run this in a dedicated terminal (outside of your code editor) so you can see more of it. You should scroll through all of it to see what might be useful.

You may:

* Add other functions as necessary to solve each problem (but not external libraries or npm packages)
* Read the `problems.test.js` file to get more clarity on what the tests are looking for (but it may be confusing, in which case don't worry about it)

**DO NOT**:

* Modify the `problems.test.js` file in any way.
* Modify the function names in `problems.js`.
* Modify any function signatures in `problems.js` (the function signature is how many arguments each function has)

Any modifications to any of these things will cause the tests to break and we will be unable to score your assessment.

## Submission

When finished, commit your work and make a pull request on the repository. **Put your username as the title of the pull request.**

## Reading the test output

Here's a sample output for one test. The most useful parts will be the description (at the top) and the Expected / Received lines.

**Received** is what your function actually returned, which you can use to debug your code. In this case, the function returned undefined, or nothing.

Line 17 is some of the automated test code. It shows the function being called with 2 values passed in: `multiply(5, 10)` and what it **Expects** the result to be (in this case, `50`)

Use these two pieces of information, plus the description for each problem, to help solve the challenges!

```
● Question 1, multiply › Returns the right value

    expect(received).toBe(expected) // Object.is equality

    Expected: 50
    Received: undefined

      15 | 
      16 |   test("Returns the right value", () => {
    > 17 |     expect(multiply(5, 10)).toBe(50)
         |                             ^
      18 |     expect(multiply(1, 235)).toBe(235)
      19 |     expect(multiply(-5, 18)).toBe(-90)
      20 |   })
```