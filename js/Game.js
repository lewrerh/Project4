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
        let phraseArr = [];
        phraseArr.push(new Phrase("Jesus is lord"));
        phraseArr.push(new Phrase("Blessings in the name of Jesus"));
        phraseArr.push(new Phrase("Favor grace"));
        phraseArr.push(new Phrase("Anointed preacher"));
        phraseArr.push(new Phrase("Bible text"));

        return phraseArr;
    }

  
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
        
    }
  
/* Begins game by selecting a random phrase and displaying it to user*/

startGame() {
        
    // Get the overlay and hide it
    let overlay = document.getElementById("overlay");
    overlay.style.display = "none";

    // Check if we won previously and update the overlay class from win to start
    if (overlay.classList.contains("win"))
       overlay.className = overlay.className.replace(/\bwin\b/g, "start");

    // Check if we lost previously and update the overlay class from lose to start
    if (overlay.classList.contains("lose"))
    overlay.className = overlay.className.replace(/\blose\b/g, "start");

    // Get a randomn phrase Object
    let phraseObj = this.getRandomPhrase();
    
    
    // Add the Phrase to the display
    phraseObj.addPhraseToDisplay();

    // Set the active phrase object
    this.activePhrase = phraseObj;

}

checkForWin() {

    // Get the Letters that have a class name called letter
    const letters = document.getElementsByClassName("letter");

    // Loop through the letters and check if it has the css class hide.
    // If it does, the user has not revealed all the letters, so no win
    for (let m = 0; m < letters.length; m++) {
        if (letters[m].classList.contains("hide"))
            return false;
    }

    return true;

}
    

removeLife() {

    // Get all the lives
    const lives = document.getElementsByClassName("tries");
    
    lives[this.missed].firstElementChild.src = "images/lostHeart.png";

    if (this.missed == 4) {
        this.gameOver(false);
    }

    this.missed++;
}


gameOver(gameWon) {

        
        let overlay = document.getElementById("overlay");        // Display the original start screen overlay
        overlay.style.display = "block";

        const game_over_message = document.getElementById("game-over-message");  // Get the overlay h1 element

        if (gameWon) {                                                          // If the user won the game, display win message, else display loss msg
            game_over_message.innerText = "Great Job!";
            overlay.className = overlay.className.replace(/\bstart\b/g, "win");
        }
        else {
            game_over_message.innerText = "Sorry, better luck next time!";
            overlay.className = overlay.className.replace(/\bstart\b/g, "lose");
        }

//Reset some properties, remove all the li elements from the Phrase ul element
//get the phrase ul element
        let phraseUl = document.getElementsByTagName("ul");

const letters = document.querySelectorAll(".letter");                      //Get the Letters that have a class name called letter & also get the spaces
const spaces = document.querySelectorAll(".space");
                                                                         //Remove all the letters & spaces also
        for (let n = 0; n < letters.length; n++) {
            phraseUl[0].removeChild(letters[n]);
        }
        for (let t = 0; t < spaces.length; t++) {
            phraseUl[0].removeChild(spaces[t]);
        }
//Enable all of the onccreen keyboard buttons and update each to use the 'key' CSS class.
//and not use the 'chosen' or 'wrong' CSS classes as before.
        const buttons = document.getElementsByClassName("key");
            for (let p = 0; p < buttons.length; p++) {
                buttons[p].disabled = false;

                if (buttons[p].classList.contains("chosen"))
                    buttons[p].classList.remove("chosen");

                if (buttons[p].classList.contains("wrong"))
                    buttons[p].classList.remove("wrong");
        }
        
//Reset all the heart images
        const lives = document.getElementsByClassName("tries");

        for (let v = 0; v < lives.length; v++)
        lives[v].firstElementChild.src = "imges/liveHeart.png";
        
    }

    handleInteraction(button) {
        button.disabled = true;

        if (this.activePhrase.checkLetter(button.innerText)) {
            button.classList.add("chosen");
            this.activePhrase.showMatchedLetter(button.innerText);

            if (this.checkForWin()) {
                this.gameOver(true); 
            }
        }
        else {

            button.classList.add("wrong");
            this.removeLife();
        }

    }
}
