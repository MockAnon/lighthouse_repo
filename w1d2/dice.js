function roll(number){
  let roll = [];
  let string = '';
  for (var i = 1; i <= number; i++){
  roll = Math.floor(Math.random() * (6) + 1);
  if(i < number){
    string += roll + ", ";
  } else {
    string += roll;
  }




  }


  console.log(string)
  return string;

}


console.log(roll(6));
