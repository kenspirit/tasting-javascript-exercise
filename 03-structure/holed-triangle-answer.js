'use strict'

var args = process.argv;
var count = parseInt(args[2]);

for (var i = 1; i <= count; i++) {
  var result = '';

  for (var j = 1; j <= i; j++) {
    if (j != 1) {
      result += ' ';
    }
    result += '#';
  }

  console.log(result);
}
