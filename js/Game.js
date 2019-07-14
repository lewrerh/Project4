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

startGame() {                                          /*g
    Get the overlay and hide it*/
    let overlay = document.getElementById("overlay");
    overlay.style.display = "none";                    /*Check for previous win and update the overlay class from win to start*/
   if (overlay.classList.contains("win"))
   overlay.className = overlay.className.replace(/\bwin\b/g, "start");     /*Check if previously lost and update the overlay class fom lose to start*/
   if (overlay.classList.contains("lose"))
   overlay.className = overlay.className.replace(/\blose\b/g, "start");   /*Get a random phrase object*/
   let phraseObj = this.getRandomPhrase();            /*Add the phrase to the display*/
   phraseObj.addPhraseToDisplay();                    /*Set the active phrase object*/
   this.activePhrase = phraseObj;
}

checkForWin() {                                                      //Getting leters that have a class named letter
    const letters = document.getElementsByClassName('letter');       //loop thru letter to check if it has the CSS class hide.
        for (let m = 0; m < letters.length; m++) {                   //if it does, user hasn't revealed all letters so no win.
            if (letters[m].classList.contains('hide'))               //value increased if missed, removes a life, check remaining lives & ends games if out of lives.
                return false;
        } 
        return true;   
}
    

    removeLife() {
        const lives = document.getElementsByClassName("tries");        //Get all the lives
        lives[this.missed].firstElementChild.src = "images/lostHeart.png";
        if (this.missed == 4) {
            this.gameOver(false);
        }
        this.missed++;
    }

gameOver(gameWon) {                               //Display original start screen overlay
    let overlay = document.getElementById("overlay");
    overlay.style.display = "block";
//Get the overlay h1 element
    const game_over_message = document.getElementById("game_over_message");

    if (gameWon) {                                   //If won game display win message, else displase lose message
        game_over_message.innerText = "Great Job!";
        overlay.className = overlay.className.replace(/\bstart\b/g, "win");
    }
    else {

            game_over_messageinnerText = "Sorry, better luck next time!";
            overlay.className = overlay.className.replace(/\bstart\b/g, "lose");
        }
//Reset some properties, remove all the li elements from the Phrase ul element
//get the phrase ul element
        let phraseUl = document.getElementsByTagName("ul");
//Get the Letters that have a class name called letter & also get the spaces
const letters = document.querySelectorAll(".letter");
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
