'use strict'

function curryN(fn, n) {
  n = n || fn.length

  return function(arg) {
    if (n <= 1) {
      return fn(arg)
    }

    return curryN(fn.bind(null, arg), n - 1)
  }
}
