import React, {useEffect, useState} from 'react'
import './App.css';
import {coding} from "./data"

import MemoryCard from "./MemoryCard"


function App() {
  
  const [memCards, setMemCards] = useState([])
  const [collection, setCollection] = useState(coding)


  useEffect(() => {
    setMemCards(duplicate(collection))
  },[collection])

  const duplicate = (cards) => {
    let dupCards = []
    for (let i = 0; i < 2 * (cards.length); i++){
      let newCard = {...cards[i % cards.length], key: cards[i % cards.length].titl+i}
      dupCards.push(newCard)
    }
    return dupCards
  }



  console.log(memCards)
  return (
    <div className="App">
      <div className="card-area">
        {memCards.map(cardData => {
          return <MemoryCard key={cardData.key} card={cardData}/>
        })}
      </div>
    </div>
  );
}

export default App;
