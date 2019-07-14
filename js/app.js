/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//const phrase = new Phrase();
//const game = new Game();

/*const phrase = new Phrase('Life is like a box of chocolates');
console.log(`Phrase - phrase: ${phrase.phrase}`);
console.log(phrase);*/

/*const game = new Game();
game.phrases.forEach((phrase, index) => {
console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});*/

/*const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
};
const game = new Game();
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());*/

/*const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();*/

/*const game = new Game();
const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase.phrase);
phrase.addPhraseToDisplay();*/

/*const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
*/
let game;

    const btn__reset = document.getElementById("btn__reset");
    const qwerty = document.getElementById("qwerty");

    btn__reset.addEventListener('click', function() {

        game = new Game();
        game.startGame();
    });
  /*Capture who was clicked*/
    qwerty.addEventListener('click', function(event) {
        let target = event.target;
        if (target.tagName != "BUTTON")
        return;      
/*Call game object function handleInteraction*/
        game.handleInteraction(target);

    });

    window.addEventListener("keydown", function (event) {                  //Added feature for extra credit so the keydown works using keyboard to enter letters

        let clickedKey = String.fromCharCode(event.keyCode).toLowerCase();
    
        const buttons = document.getElementsByClassName("key");
    
        let s = 0;
    
        for (s = 0; s < buttons.length; s++) {
            if (buttons[s].innerText == clickedKey)
                break;
        }
    
        // Call the game object function handleInteraction
        if(s != 26)
            game.handleInteraction(buttons[s]);
        
    
    });
    
