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
    let chains = new Map();

    //loop through word
    for (let i = 0; i < this.words.length; i++) {
      //create  new variables for the looping
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      //update the chain
      if(chains.has(word)) {
        chains.get(word).push(nextWord);
      } else {
        //If the map does not contain word, it creates a new entry with the word as the key &
        // nextWord as the first element in the list of subsequent words.
        chains.set(word, [nextWord]);
      }
    }
    this.chains = chains;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    //set up variables
    let keys = Array.from(this.chains.keys());
    let key = keys[Math.floor(Math.random() * keys.length)];
    let output = [];

    while(output.length < numWords && key !== null){
      output.push(key);
      let nextWords = this.chains.get(key);
      key = nextWords[Math.floor(Math.random() * nextWords.length)];
    }
    return output.join(" ");
  }
}
