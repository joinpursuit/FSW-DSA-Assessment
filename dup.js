//Write a function that returns all the duplicate numbers in an array

function find_duplicate(arra1) {
  let frequencies = {}
  let dupes = []
  for (let val of arra1) {
    frequencies[val] = frequencies[val] ? frequencies[val] + 1 : 1
    if (frequencies[val] === 2) {
      dupes.push(val)
    }
  }  
  return dupes
}

module.exports = find_duplicate;
