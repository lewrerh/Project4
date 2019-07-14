/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
/**
* Display phrase on game board
*/
addPhraseToDisplay() {
    let phraseUl = document.getElementsByTagName("ul");
    for (let i = 0; i < this.phrase.length; i++) {
        let li = document.createElement("li");           
        if (this.phrase[i] == ' ') {
            li.classList.add("space");
            let space = document.createTextNode(" ");
            li.appendChild(space);
    } else {
        li.classList.add("hide");
        li.classList.add("letter");
        li.classList.add(this.phrase[i]);
        let letter = document.createTextNode(this.phrase[i]);
        li.appendChild(letter);
    }
    phraseUl[0].appendChild(li);
    }
}

checkLetter(letter) {              //Loops thru phrase text and if leeter matches, the phrase text at index j, return true
    for (let j = 0; j < this.phrase.length; j++) {
        if (this.phrase[j] == letter)
            return true; 
    }
        return false;         //No match return false
}

/*Get matchedLetters that have a className letter*/
showMatchedLetter(letter) {
    const matchedLetters = document.getElementsByClassName(letter);
/*Loop through matchedLetters and replace hide class with show*/
    for (let k = 0; k < matchedLetters.length; k++) {
        matchedLetters[k].className = 
    matchedLetters[k].className.replace(/\bhide\b/g, "show");
        }
    }
}






  







