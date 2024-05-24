import React from 'react';
import { useEffect, useState } from "react";

const colors = [
    '#FFFFFF',
    '#000000',
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#FFA500',
    '#A020F0',
    '#808080',
    '#FFC0CB',
];

const GuessColor = () =>
{
    const [threeRandomColor, setThreeRandomColors] = useState([]);
    const [boardColor, setBoardColor] = useState("");
    const [isCorrect, setIsCorrect] = useState("");
    const [newGame, setNewGame] = useState(false);


    const shuffleArray = array =>
    {
        for (let i = array.length - 1; i > 0; i--)
        {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    useEffect(() =>
    {
        const newGame = () =>
        {
            const shuffledColors = shuffleArray(colors);
            const selectedThreeRandomColors = shuffledColors.slice(0, 3);
            setThreeRandomColors(selectedThreeRandomColors);

            const randomIndex = Math.floor(Math.random() * selectedThreeRandomColors.length);
            setBoardColor(selectedThreeRandomColors[randomIndex]);
        }

        setTimeout(() =>
        {
            setIsCorrect("");
            newGame();
        }, 500)

    }, [newGame]);

    const handleColorGuess = (e) =>
    {
        const selectedColor = e.currentTarget.value;

        if (selectedColor === boardColor)
        {
            setIsCorrect("yes");
            setNewGame(prev => !prev);
        } else
        {
            setIsCorrect("no");
        }
    }

    return (
        <>
            <h1 className='title'>Guess the color</h1>
            <div className='color-board' style={{ backgroundColor: boardColor }}></div>
            <div className='colors-buttons'>
                {threeRandomColor.map((color, index) => (
                    <button value={color} key={index} onClick={handleColorGuess}>
                        {color}
                    </button>
                ))}
            </div>
            <h4 className="message">
                {isCorrect === "yes" ? "Correct! ✅" :
                    isCorrect === "no" ? "Wrong ❌" : null}
            </h4>
        </>
    )
}

export default GuessColor;
