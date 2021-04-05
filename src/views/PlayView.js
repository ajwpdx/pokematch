import React from "react"
import MemoryCard from "../components/MemoryCard"

const PlayView = (props) => {

    console.log(props.memCards)
    return (
        <div className="card-area">
            {props.memCards.map(cardData => {
                return <MemoryCard key={cardData.key} card={cardData} setSelection={props.setSelection} selection={props.selection} checkMatch={props.checkMatch} />
            })}
        </div>
    )
}

export default PlayView