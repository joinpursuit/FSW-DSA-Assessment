//Write a function that returns all the duplicate numbers in an array

function find_duplicate(arra1) {
  var object = {};
  var result = [];

  arra1.forEach(function (item) {
    if(!object[item])
        object[item] = 0;
      object[item] += 1;
  })

  for (var prop in object) {
     if(object[prop] >= 2) {
         result.push(Number(prop));
     }
  }

  return result; 
  }

  module.exports = find_duplicate;
