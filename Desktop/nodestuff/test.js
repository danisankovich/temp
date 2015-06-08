function splitSum(str, symbol) {
  function reduceSum(t, n) {return t + parseInt(n, 10);}
  return str.split(symbol).reduce(reduceSum, 0);
}

function reduceSum(t, n) {return t + parseInt(n, 10);}

function argSum() {
  var numbers = Array.prototype.slice.call(arguments);//turns arguments into array, then slices it (thats why you need prototype)
  return numbers.reduce(reduceSum);
}

function createArrayFromAtoB(a, b) {
  var rangeArray = [a];
  var next = a;
  while (next < b) {
    next += 1;
    rangeArray.push(next);
  }
  return rangeArray
}
createArrayFromAtoB(1, 9)

function assertEqual(actual, expected) {
  console.log(actual === expected ? 'Pass' : 'FAIL');
}

assertEqual(splitSum('3$-4$5$5$-1', '$'), 8)
assertEqual(argSum(3,8,4), 15)
