import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guessesList, setGuessesList] = React.useState([
    {
      id: crypto.randomUUID(),
      label: "FIRST"
    },
    {
      id: crypto.randomUUID(),
      label: "GUESS"
    },
  ])

  const [searchInput, setSearchInput] = React.useState('')

  function enterGuess () {

    const nextGuessesList = [...guessesList, {
      id: crypto.randomUUID(),
      label: searchInput.toUpperCase()
    }];

    if (nextGuessesList.length > NUM_OF_GUESSES_ALLOWED) return;

    setGuessesList(nextGuessesList)
    setSearchInput('')

  }

  return <>
    <GuessResults guessesList={guessesList} answer={answer}/>
    <GuessInput searchInput={searchInput} setSearchInput={setSearchInput} enterGuess={enterGuess}/>
  </>;
}

export default Game;
