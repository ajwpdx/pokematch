import React from "react"

const Header = (props) => {
    return (
        <header>
            <h1 className='logo'>PokeMatch</h1>
            <div className="score-board-area">
                <div className="score-board">
                    <h2>Matches</h2>
                    <p>{props.matches.length / 2} / 8</p>
                </div>
                <div className="score-board">
                    <h2>Guesses</h2>
                    <p>{props.guesses}</p>
                </div>
                <div className="score-board">
                    <h2>Time</h2>
                    <p>0</p>
                </div>
            </div>
        </header>
    )
}

export default Header