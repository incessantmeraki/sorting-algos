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
