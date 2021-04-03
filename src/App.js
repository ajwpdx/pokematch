import React, { useEffect, useState } from 'react'
import './App.css';
import { coding } from "./data"

import MemoryCard from "./MemoryCard"

function App() {

  const [memCards, setMemCards] = useState([])
  const [selection, setSelection] = useState()
  const [matches, setMatches] = useState([])
  const [guesses, setGuesses] = useState(0)
  const [phase, setPhase] = useState('start')


  useEffect(() => {
    setMemCards(duplicate(coding))
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


  return (
    <div className="App">
      <header>
        <h1 className='logo'>PokeMatch</h1>
        <div className="score-board-area">
          <div className="score-board">
            <h2>Matches</h2>
            <p>{matches.length / 2} / 8</p>
          </div>
          <div className="score-board">
            <h2>Guesses</h2>
            <p>{guesses}</p>
          </div>
          <div className="score-board">
            <h2>Time</h2>
            <p>0</p>
          </div>
        </div>
      </header>
      <div className="card-area">

        {memCards.map(cardData => {
          return <MemoryCard key={cardData.key} card={cardData} setSelection={setSelection} selection={selection} checkMatch={checkMatch} />
        })}
      </div>
    </div>
  );
}

export default App;
