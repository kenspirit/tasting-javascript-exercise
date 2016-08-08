function sum() {
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      result += arguments[i];
    }
  }

  return result;
}
