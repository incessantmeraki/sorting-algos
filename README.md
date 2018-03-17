# sorting-algos

implementation of various sorting algorithms in javascript

[![Build Status](https://travis-ci.org/incessantmeraki/sorting-algos.svg?branch=master)](https://travis-ci.org/incessantmeraki/sorting-algos)

## Usage

### Example

```js
  var {bubbleSort} = require('sorting-algos')
  var {selectionSort} = require('sorting-algos')
  var {insertionSort} = require('sorting-algos')
  var {heapSort} = require('sorting-algos')
  var {mergeSort} = require('sorting-algos')
  var {quickSort} = require('sorting-algos')

  var items = [35, 13, 44, 53, 1, 34, 51, 15, 88, 42]

  console.log(bubbleSort(items))
  console.log(selectionSort(items))
  console.log(insertionSort(items))
  console.log(heapSort(items))
  console.log(mergeSort(items))
  console.log(quickSort(items))
```

### API

#### `var {sorter} = require('sorting-algos')`
loads sorting algorithm where sorter can be *bubbleSort*, *selectionSort*, *insertionSort*, *heapSort*, *mergeSort* or *quickSort*

#### `sorter(items)`
sorts items in ascending order and returns it

## License

MIT
