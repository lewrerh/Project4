/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    createPhrases() {
        let phraseArray = [];
        phraseArray.push(new Phrase("In it to win it")), 
        phraseArray.push(new Phrase("No pain no gain")), 
        phraseArray.push(new Phrase("Can not quit and will not stop")), 
        phraseArray.push(new Phrase("Houston we got a problem")), 
        phraseArray.push(new Phrase("You got this keep going"));
        

        return phraseArray;
    }
  
    getRandomPhrase() {
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    }

    /**
* Begins game by selecting a random phrase and displaying it to user
*/
//startGame() {};//

startGame() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhraseToDisplay();

};


};
        
    

