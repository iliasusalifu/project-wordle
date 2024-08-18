import { range } from '../../utils';
import Guess from './Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
function WordGrid({ guessHistory, answer }) {
  const rows = range(0, NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {rows.map((id) => (
        <Guess key={id} guess={guessHistory[id]} answer={answer} />
      ))}
    </div>
  );
}

export default WordGrid;
