import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import WordGrid from '../WordGrid';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner';
import GuessInput from '../GuessInput/GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState('');
  const [guessHistory, setGuessHistory] = useState([]);
  const [status, setStatus] = useState('playing');

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    setGuess('');

    const nextGuessHistory = [...guessHistory, guess];
    console.log('nextGuessHistory', nextGuessHistory);
    setGuessHistory(nextGuessHistory);
    if (guess === answer) {
      setStatus('won');
    } else {
      if (nextGuessHistory.length >= NUM_OF_GUESSES_ALLOWED) {
        setStatus('lost');
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <WordGrid guessHistory={guessHistory} answer={answer} />
      <label htmlFor="guess-input">Enter guess:</label>
      <GuessInput guess={guess} setGuess={setGuess} status={status} />

      {status === 'won' && (
        <Banner status="happy">
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{guessHistory.length} guesses</strong>.
        </Banner>
      )}

      {status === 'lost' && (
        <Banner status="sad">
          Sorry, the correct answer is <strong>{answer}</strong>.
        </Banner>
      )}
    </form>
  );
}

export default Game;
