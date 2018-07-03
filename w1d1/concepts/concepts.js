ar conceptList = ["gists", "types", "operators", "iteration", "problem solving"];



var concepts = joinList(conceptList);
function joinList(conceptList) {
  var result = "";
  var end = conceptList.length - 1;
  if(conceptList.length >= 2){
    for (var i = 0; i < end; i++) {
      result += (conceptList[i] + ", ")
    }
    result += 'and ' + conceptList[end];
  }
  else if(conceptList.length === 1){
    result = conceptList[0];

  }
  return result;

}

console.log("Today I learned about " + concepts + ".");



////








var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

var result = "";

var concepts = joinList(conceptList);
function joinList(conceptList) {
  var end = conceptList.length - 1;
  if(conceptList.length >= 2){
    for (var i = 0; i < end; i++) {
      result += (conceptList[i] + ", ")
    }
    result += 'and ' + conceptList[end];
  }
  else if(conceptList.length === 1){
    result = conceptList[0];

  }
  return result;

}

console.log("Today I learned about " + concepts + ".");