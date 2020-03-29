// Do not change any of the function names or the function signatures
// (the number of arguments in a function)
// or else the tests will not pass.
// e.g. don't change multiply(x, y) to multiply(x,y,z)

// Question 1
// Write a function that returns two numbers multiplied
// ex: multiply(5, 10) should return 50

function multiply(x, y) {
  return x * y;
}

// Question 2
// Given an array of integers, return a new array of the same length that contains the original values squared.
// ex: arraySquare([1,3,5,8]) should return [1,9,25,64]

function arraySquare(arr) {
  return arr.map(el => {
    return el * el;
  });
}

// Question 3
// Given two integers (low and high), return how many numbers are in that range that
// DO NOT contain the number 5. This includes any number that has a 5, like 15, 352, etc.
// ex: integerRange(1, 10) should return 8
// ex: integerRange(4, 25) should return 19

function integerRange(low, high) {
  let count = 0;

  // traverse numbers starting from low and till we get to high

  for (let i = low; i < high; i++) {
    //check if number contains 5. if yes, skip. if no count++

    if (i.toString().match(/5/) === null) {
      count++;
    }
  }

  //return int
  return count;
}

// Question 4
// Write a function that takes an integer and an unsorted array of numbers
// and returns true if there's any pair of numbers in that array that can be
// summed up to the input integer.
// ex: inputSum([1,3,5,4,2], 7) should return true
// ex: inputSum([1,3,5,4,2], 2) should return false

function inputSum(arr, targetInt) {
  //return boolean

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetInt) return true;
    }
  }

  return false;
}

// Question 5
// Implement a function that accepts an array of integers as an argument.
// This function should return the sum of all integers in the array.
// Your solution should be **recursive**.
// ex: recursiveSum([1,2,3,4,5]) should return 15

function recursiveSum(input) {
  //base case1
  if (!input.length) return;

  //base case2
  if (input.length === 1) return input[0];

  //remove one element at a time (use pop or slice) and recursivly add it w/ the rest
  return input.pop() + recursiveSum(input);
}

// Question 6
// Given a linked list, write a function that takes it as input,
// traverses it, and returns an array with all the values in the linked list.
// Assume the linked list starts with 1 as the root node and looks like: 1->9->8->5
// ex: traverseLinkedList(firstNode) should return [1,9,8,5]
//
// Example of a Linked List Node:
// class Node {
//   constructor(value, next = null) {
//     this.value = value
//     this.next = next
//   }
// }

function traverseLinkedList(inputList) {
  // console.log('ll', inputList);
  let output = [];

  let current = inputList;

  while (current) {
    output.push(current.value);

    current = current.next;
  }

  return output;
}

// Question 7
// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Note: A leaf is a node with no children.
//
// Example tree, depth is 3. Your function should return an integer only.
//     3
//    / \
//   2   20
//      /  \
//     7   25
//
// Definition for a binary tree node.
// class TreeNode {
//   constructor(val) {
//     this.val = val
//     this.left = null
//     this.right = null
//   }
// }

function maxDepth(tree) {
  //handle null input
  if (tree === null) return 0;

  console.log("tree:", tree);
  //DFS
  //recursivly traverse both sides of the tree to find their depth
  let left = maxDepth(tree.left);
  let right = maxDepth(tree.right);

  //return int
  // add 1 to the max depth to account for curr node
  return Math.max(left, right) + 1;
}

module.exports = {
  multiply,
  arraySquare,
  recursiveSum,
  integerRange,
  inputSum,
  traverseLinkedList,
  maxDepth
};
