import React from 'react';

function GuessInput({ guess, status, setGuess }) {
  return (
    <input
      id="guess-input"
      value={guess}
      onChange={(event) => {
        setGuess(event.target.value.toUpperCase());
      }}
      type="text"
      pattern="\w{5}"
      disabled={status !== 'playing'}
    />
  );
}

export default GuessInput;
