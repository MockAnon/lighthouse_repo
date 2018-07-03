// function average(list) {
//   var sum = 0;

//   for (var num of list) {
//     sum ++ num;
//   }

//   return sum / list.length;

// console.log(average([3, 5, 7]));
//old

function average(list) {
  var sum = 0;

  for (var num of list) {
    sum += num;
  }
  console.log('sum:' + sum);
  console.log('length:' + list.length);

  return sum / list.length;
}

console.log(average([3, 5, 7]));

console.log(average([5, 5, 5]));
console.log(average([1,2,3,4,5]));
console.log(average([1, 7, 7]));