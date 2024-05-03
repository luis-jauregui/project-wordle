import React from 'react';

function GuessInput({ searchInput, setSearchInput, enterGuess }) {


  return <form onSubmit={event => {
    event.preventDefault();
    enterGuess();
  }} className='guess-input-wrapper'>
    <label htmlFor='guess-input'>Enter guess:</label>
    <input
      id='guess-input'
      type='text'
      minLength={5}
      maxLength={5}
      value={searchInput}
      onChange={(event) =>
        setSearchInput(event.target.value)
      }
    />
  </form>;
}

export default GuessInput;
