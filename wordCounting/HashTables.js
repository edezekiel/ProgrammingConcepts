// Hash Table & Associative Arrays

//---------Word Counting Coding Challenge-------//
//------number of times word (x) appears in lorem.txt?

let text;
let counts = {};
let keys = [];

function preLoad() {
  txt = loadStrings('lorem.txt');
}

function setup(){
  let allwords = txt.join("/n");
  let tokens = allwords.split(/\W+/);
  for (let i = 0; i < tokens.length; i++) {
    let word = tokens[i].toLowerCase();
    if (counts[word] === undefined) {
      // if word isn't in counts yet, then add it
      counts[word] = 1;
      // all the unique words in the order I found them
      keys.push(word);
    } else {
      // else, increment the count
      counts[word] = counts[word] + 1;
    }
  }

  // sorts words alphabetically by default
  // to sort by count, pass Fn into sort Fn

  // return positive or negative number
  function compare(a, b){
    let countA = counts[a];
    let countB = counts[b];
    return countB - countA;
  }

  keys.sort(compare)

  // displays each unique key and its count
  for (let i = 0; i < keys.length; i++){
    // I now have all the words and their counts
    let key = key[i];
    createDiv(key + " " + counts[key]);
  }

  noCanvas();
}
