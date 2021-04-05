import React, { useEffect, useState } from 'react'
import './App.css';
import { dummyPokeData } from "./data"

import CardArea from "./views/PlayView"
import Header from "./components/Header"
import axios from 'axios';


function App() {

  const [memCards, setMemCards] = useState([])
  const [pokemon, setPokemon] = useState([])
  const [selection, setSelection] = useState()
  const [matches, setMatches] = useState([])
  const [guesses, setGuesses] = useState(0)
  const [phase, setPhase] = useState('start')


  useEffect(() => {

    getPokemon()
    // setMemCards(duplicate())
  }, [])

  const getPokemon = () => {
    for (let i = 0; i < 8; i++) {
      let newPokemonId = Math.floor(Math.random() * 150) + 1
      axios.get(`https://pokeapi.co/api/v2/pokemon/${newPokemonId}`)
        .then(res => {
          let newPokemon = {
            name: res.data.name,
            id: res.data.id,
            image: `https://pokeres.bastionbot.org/images/pokemon/${newPokemonId}.png`
          }
          console.log(newPokemon)
          setPokemon([newPokemon])
          console.log(pokemon)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  const duplicate = (cards) => {
    let dupCards = []
    for (let i = 0; i < 2 * (cards.length); i++) {
      let newCard = { ...cards[i % cards.length], key: cards[i % cards.length].name + i, match: false, selected: false }
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
