var assert = require('assert');
var bubbleSort = require('../bubble-sort');

describe('bubbleSort', function(){
  it('it sorts an unsorted array', function(){
    var array = [4,1,3,7,2,6,5]
    bubbleSort.bubbleSort(array)
    assert.equal(array.join(''), [1,2,3,4,5,6,7].join(''))
  })
  it('accepts an empty array', function(){
    var array = []
    bubbleSort.bubbleSort(array)
    assert.equal(array.join(''), [].join(''))
  })
  it('works when an array has multiple identical items', function(){
    var array = [4,1,3,1,2,1,7,6,5,4]
    bubbleSort.bubbleSort(array)
    assert.equal(array.join(''), [1,1,12,3,4,4,5,6,7].join(''))
  })
})
