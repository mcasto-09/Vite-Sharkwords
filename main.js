import './style.css';
import getRandomWord from './src/randomWord.js';
import setSharkImage from './src/sharkImage.js';
import {setupWord} from './src/word.js';
import {isLetterInWord} from './src/word.js';
import {revealLetterInWord} from './src/word.js';
import {setupGuesses} from './src/guess.js';
// const { key } = myObject
let numWrong
document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  numWrong = 0;
  const word = getRandomWord();
  setupWord(document.querySelector('#word-container'), word);
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
    numWrong += 1;
    setSharkImage(document.querySelector(`#shark-img`), numWrong)
    };
  }

setupGuesses(document.querySelector('#letter-buttons'), handleGuess);
let isWordComplete = true;
for (const el of document.querySelectorAll('.letter-box')) {
  if (el.innerText === '') {
    isWordComplete = false;
    break; 
  } 
  document.querySelectorAll('button').forEach((btn) => {
    btn.setAttribute('disabled', true);
  });
}

initSharkwords();


