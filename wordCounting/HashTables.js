// Hash Table & Associative Arrays

//---------Word Counting Coding Challenge-------//
//------number of times word (x) appears in lorem.txt?

let text;

function preLoad() {
  txt = loadStrings('lorem.txt');
}

function setup(){
  let allwords = txt.join("/n");
  let tokens = allwords.split(/\W+/);
  console.log(tokens)

  noCanvas();
}

preLoad()

setup()
