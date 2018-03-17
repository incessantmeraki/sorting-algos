var test = require('tape')
var {bubbleSort} = require('./index.js')
var {selectionSort} = require('./index.js')

function isSorted (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) 
      return false
  }
  return true
}

function createRandomList (size = 10, max=1000) {
  var arr = []
  for (let i = 0; i < size; i++) {
    arr.push(parseInt(Math.random()*max , 10))
  }
  return arr
}


test('test bubble sort', function (t) {
  for (let i = 10; i < 1000; i = i + 10) {
    let testData = createRandomList(i)
    t.ok(isSorted(bubbleSort(testData)))
  }
  t.end()
})

test('test selection sort', function (t) {
  for (let i = 10; i < 1000; i = i + 10) {
    let testData = createRandomList(i)
    t.ok(isSorted(selectionSort(testData)))
  }
  t.end()
})
