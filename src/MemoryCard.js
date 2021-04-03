import React, { useEffect, useState } from "react"

const url = "https://pokeres.bastionbot.org/images/pokemon";

const MemoryCard = (props) => {

    let flippedOver = false

    const selectCard = () => {
        if (!props.selection) {
            props.card.selected = true
            props.setSelection([props.card])
        } else if (props.selection && props.card !== props.selection) {
            props.card.selected = true
            props.checkMatch(props.selection, props.card)
        }
    }

    return (
        <div className={props.card.selected || props.card.match ? "memory-card selected" : "memory-card"} onClick={props.card.match ? () => { } : selectCard}>
            <div className="memory-card-inner">
                <div className='mem-card-back'>
                </div>
                <div className="mem-card-face">
                    <div className='card-title'><h2>{props.card.title}</h2></div>
                    <img src={`${url}/${280}.png`} alt={props.card.alt} />
                </div>
            </div>
        </div>
    )
}

export default MemoryCard