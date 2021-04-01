import React from "react"



const MemoryCard = (props) => {

    return(
        <div className="memory-card">
            <h2>{props.card.title}</h2>
            <img src={props.card.src} alt={props.card.alt}/>

        </div>
    )
}

export default MemoryCard