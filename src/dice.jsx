import React, { useState } from 'react'




const Dice = () => {
    const [roll, setRoll] = useState(1)
    

    const rollDice = () => {
        const newRoll = Math.floor(Math.random() * 6) + 1;
        setRoll(newRoll);
    }

    return (
        <div className="dice-container">
        <h1 className="dice-roll">Die Roll: {roll}</h1>
        <button className="roll-button" onClick={rollDice}>Roll Dice</button>
        </div>
)
}

export default Dice
