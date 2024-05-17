const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export function setupGuesses(element, handleGuess) {
  alphabet.split('').forEach((letter) => {
    const btn = document.createElement('button');
    btn.innerText = letter;
    btn.addEventListener('click', (element) => handleGuess(element, letter));
    element.append(btn);
  });
}

 const handleGuess = (guessEvent, letter) => {
  console.log(`guessEvent is: ${guessEvent}`)
  console.log(`letter is: ${letter}`)
};


