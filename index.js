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

exports.b = function() {
  console.log('This is b')
}
