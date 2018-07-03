function obfuscate(pass){
var result = "";
    for (var i = 0; i < pass.length; i++){
        if (pass[i] === "a"){
          result += "4";
        } else if (pass[i] === "e"){
          result += "3";
        } else if (pass[i] === "0"){
          result += "0";
        } else if (pass[i] === "l"){
          result += "1";
        }
        else{
  result += pass[i];
        }
    }
    return result;
}
console.log(obfuscate("alex"));
console.log(obfuscate("password"));
console.log(obfuscate("abracadabra"));
console.log(obfuscate("audaciously"));


