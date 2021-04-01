import React from "react"



const MemoryCard = (props) => {

    return(
        <div className="memory-card">
            <div className="memory-card-inner"></div>
            <div className='card-title'><h2>{props.card.title}</h2></div>
            <img src={props.card.src} alt={props.card.alt}/>

        </div>
    )
}

export default MemoryCard