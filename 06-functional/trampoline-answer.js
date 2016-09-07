'use strict'

function thunkedFactorial(n, cb) {
  function cal(n, result, cb) {
    if (n === 0) {
      cb(result)
      return null
    }
    return function() {
      return cal.bind(null, n - 1, n * result, cb);
    }
  }
  return cal.bind(null, n, 1, cb);
}
