import React from 'react';
import Guess from '../Guess/Guess';

function GuessResults({ guessesList, answer }) {
  return <div className='guess-results'>
      {guessesList.map(guess => (
        <p key={guess.id} className='guess'><Guess guess={guess} answer={answer} /></p>
      ))}
  </div>;
}

export default GuessResults;
