import React, { useEffect, useState } from 'react'
import './App.css';
import { dummyPokeData } from "./data"

import CardArea from "./views/PlayView"
import Header from "./components/Header"
import axios from 'axios';


function App() {

  const [memCards, setMemCards] = useState([])
  const [selection, setSelection] = useState()
  const [matches, setMatches] = useState([])
  const [guesses, setGuesses] = useState(0)
  const [phase, setPhase] = useState('start')


  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/3")
      .then(res => {
        console.log(res.data.name)
      })
    setMemCards(duplicate(dummyPokeData))
  }, [])

  const duplicate = (cards) => {
    let dupCards = []
    for (let i = 0; i < 2 * (cards.length); i++) {
      let newCard = { ...cards[i % cards.length], key: cards[i % cards.length].title + i, match: false, selected: false }
      dupCards.push(newCard)
    }
    return dupCards
  }

  const checkMatch = (firstCard, secondCard) => {
    if (firstCard.title === secondCard.title) {
      setMatches([...matches, firstCard, secondCard])
      firstCard.match = true
      secondCard.match = true
    }
  }
  console.log(memCards)

  return (
    <div className="App">
      <Header matches={matches} guesses={guesses} />
      <CardArea memCards={memCards} setSelection={setSelection} selection={selection} checkMatch={checkMatch} />

    </div>
  );
}

export default App;
