var PQueue = require('priority-queues')

exports.bubbleSort = function(arr) {
  var len = arr.length
  for (let i=0; i<len-1; i++) {
    for (let j=0; j<len-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        let tmp = arr[j]
        arr[j] =  arr[j+1]
        arr[j+1] = tmp
      }
    }
  }

  return arr
}

exports.selectionSort = function(arr) {
  var len = arr.length
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i+1; j < len; j++) {
      if (arr[j] < arr[minIndex]) 
        minIndex = j
    }

    let tmp  = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = tmp
  }

  return arr
}

exports.insertionSort = function(arr) {
  var len = arr.length

  var minIndex = 0
  for (let i = 0; i < len; i++) {
    if (arr[i] < arr[minIndex])
      minIndex = i
  }
  var tmp = arr[0]
  arr[0] = arr[minIndex]
  arr[minIndex] = tmp

  for (let i = 1; i < len; i++) {
    let tmp = arr[i]
    for (j = i; tmp < arr[j-1]; j--) 
      arr[j] = arr[j-1]
    arr[j] = tmp
  }

  return arr
}

exports.heapSort = function (arr) {
  heap = new PQueue()
  for (let i = 0; i < arr.length; i++) {
    heap.push(arr[i])
  }

  for (let j = 0; i < arr.length; j++) {
    arr[i] = heap.pop()
  }
  
  return arr
}
