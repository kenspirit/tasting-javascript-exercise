'use strict'

function arrayToMap(data, iteratee) {
  var result = {}

  data.forEach(function(item, index, array) {
    var key = iteratee(item, index, array)
    result[key] = item
  })

  return result
}
