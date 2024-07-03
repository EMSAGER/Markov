/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // make a new array for the chain
    let newChain = new Map();

    //loop through word
    for (let i = 0; i < this.words.length; i++) {
      //create  new variables for the looping
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      //update the chain
      if(newChain.has(word)) newChain.get(word);
        //If the map does not contain word, it creates a new entry with the word as the key &
        // nextWord as the first element in the list of subsequent words.
      else(newChain.set(word, [nextWord]));
    }
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    //set up variables
    let keys = Array.from(this.newChain.keys());
    let key = keys[Math.floor(Math.random() * keys.length)];
    let output = [];

    while(output.length < numWords && key !== null){
      output.push(key);
      let nextWords = this.newChain.get(key);
      key = nextWords[Math.floor(Math.random() * nextWords.length)];
    }
    return output.join(" ");
  }
}
