function reverse(array){
  var result = "";
  for (var i = array.length-1; i >= 0; i--){
    result += array[i]
  }
  return result;
}


console.log(reverse("alex"));
console.log(reverse("password"));
console.log(reverse("abracadabra"));
console.log(reverse("audaciously"));
