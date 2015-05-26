var buzzWords = ["Isomorphic", "Javascript", "is", "not", "the", "Answer"];

var objDeclaratives = {
  "John": "So Isomorphic JS renders the initial view on server so when you get the HTML your browser is ready to hit the ground running.",
  "France": "Isomorphic Javascript basically means you can run the same code on the server as the client (aka the web browser).",
  "Pat": "Is not the Answer.",
  "Igor": "Isomorhic what???",
  "Martin": "Isomorphic Javascript is not the Answer.",
  "Dennis": "I do not have idea about the problem."
};


function checkBuzzWords(words, obj){
  var found = 0, winner = "";
  for(var key in obj){
    for(var i = 0; i < words.length; i++){
      var reg = new RegExp(words[i],"igm");
      //console.log(reg);
      //console.log(key + " : " + obj[key]);
      var bool = reg.test(obj[key]);
      if(bool){
        found++;
        console.log(key + " has found the word : " + words[i] + " .");
      }else{
        found = found;
      }
    }
    if(found == words.length){
      console.log(key + " has found " + found + " words. " + key + " won the game.");
      winner = key;
    }else{
      console.log(key + " has found " + found + " words. " + key + " lost the game.");
    }
    found = 0;
  }
  return console.log(winner);
}

var results = checkBuzzWords(buzzWords, objDeclaratives);