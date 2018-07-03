var input = process.argv[2];

// if (input)
console.log(reverse(input));

function reverse(original) {
  var tempStr = original.split('').reverse().join('');
  return tempStr;
}
