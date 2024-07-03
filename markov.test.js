const { MarkovMachine } = require('./markov');

//testing 

describe('testing for the MarkovMachine', function(){
    let mm;
    beforeEach(function(){
        mm = new MarkovMachine("the cat in the hat");
    })
    test("should initialize words correctly", function(){
        const words = mm.words;
        expect(words).toEqual(["the", "cat", "in", "the", "hat"]);
    });
})