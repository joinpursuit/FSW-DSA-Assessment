//Write a function that returns all the duplicate numbers in an array

function find_duplicate(arra1) {
  let vistiedVals = new Set()
  let dupes = []
  for (let val of arra1) {
    if (visitedVals.has(val)) {
      dupes.push(val)
    } else {
      visitedVals.add(val)
    }
  }
  return dupes
}

module.exports = find_duplicate;
