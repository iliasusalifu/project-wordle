import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

const MAX_LETTERS = 5;
function Guess({ guess, answer }) {
  if (!guess) {
    return (
      <p className="guess">
        {range(0, MAX_LETTERS).map((num) => (
          <span className="cell" key={num}></span>
        ))}
      </p>
    );
  }

  function createClasses(...classList) {
    let result = '';
    classList.forEach((c) => {
      result = result + ' ' + c;
    });
    return result;
  }

  const result = checkGuess(guess, answer);
  return (
    <p className="guess">
      {result.map(({ letter, status }, index) => (
        <span className={createClasses('cell', status)} key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
