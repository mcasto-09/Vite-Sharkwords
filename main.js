import './style.css';
import getRandomWord from './src/randomWord.js';
import setSharkImage from './src/sharkImage.js';
import {setupWord} from './src/word.js';
import {isLetterInWord} from './src/word.js';
import {revealLetterInWord} from './src/word.js';
import {setupGuesses} from './src/guess.js';
// const { key } = myObject

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();

  setSharkImage(document.querySelector(`#shark-img`), numWrong)
  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
};

const handleGuess = (guessEvent, letter) =>{
  let button = guessEvent.target;
  button.setAttribute('disabled', true)

  if (isLetterInWord(letter)) {
    revealLetterInWord(letter);
  } else {
    numwrong ++
    setSharkImage(sharkImgE1,numWrong);
  }
}
setupGuesses(document.querySelector('#letter-buttons'), handleGuess);
let isWordComplete = true;
for (const el of document.querySelectorAll('.letter-box')) {
  if (el.innerText === '') {
    isWordComplete = false;
    break; 
  }
}

initSharkwords();


