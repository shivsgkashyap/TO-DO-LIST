var list = [];

// Fill the list with all the numbers between 1 and 1000
// [1...1000]

for (var index = 1; index < 1001; index++) {
  list.push(index)
  
}

// Write a function that takes a number, and triples it and gives it back
// 3 -> 9
// 12 -> 36
// 3 * 3 === 9

function tripleNumber (number) {
  return number*3
}

// for every number in the list, triple it
// [3, 6, 9...3000]



for (var index = 0; index < list.length; index++) {
    var newNumber = tripleNumber(list[index])
    list[index] = newNumber
  }
  
// Add all the numbers in the current list and log in the console what it is


var finalNumber = 0
for (var index = 0; index < list.length; index++) {
    finalNumber = finalNumber + list[index]
}
console.log(finalNumber)

// Fizz buzz
// console.log all numbers between 1 and 100
// if the number is divisible by 3, print "fizz" instead
// if the number is divisible by 5 print "buzz" instead
// if the number is divisible by both 3 and 5, write, "fizzbuzz"


Problems:
1) List count needs to = total number of incompleted false items
2) Clear completed
3) Visibility Footer