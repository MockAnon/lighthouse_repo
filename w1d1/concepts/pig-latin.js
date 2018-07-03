// function pig(lat){
//   let firstLet = lat[0];
//   let result = "";
//   var res = lat.split(" ");
//   for (var i = 1; i < lat.length; i++){
//     result += lat[i];
//   }
//   return result + firstLet + "ay";
// }









function pig(sentence){
  let arrayOfWords = sentence.split(" ");
  let newArrayOfWords = [];
  for (var i = 0; i < arrayOfWords.length; i++){
    let word = arrayOfWords[i];
    let firstLet = word[0];

    let newPigLatinWord = word.substr(1) + firstLet + "ay ";




    newArrayOfWords.push(newPigLatinWord);
  }
  console.log(newArrayOfWords.join(''));
  newArrayOfWords.join('');


 // console.log(newArrayOfWords);
  return newArrayOfWords;


}


pig("this is all just gibberish");
pig("pig latin");
pig("alex");

