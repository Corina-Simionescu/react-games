import React from 'react';
import Square from './Square';
import { useState } from 'react';

const TicTacToe = () =>
{
  const [squaresValues, setSquaresValues] = useState(Array(9).fill(null));
  const [oIsNext, setOIsNext] = useState(false);

  const handleSquareClick = (i) =>
  {
    if (squaresValues[i] != null || getWinner(squaresValues) != null)
    {
      return;
    }

    const updatedSquaresValues = squaresValues.slice();

    if (oIsNext)
    {
      updatedSquaresValues[i] = 'O';
    }
    else
    {
      updatedSquaresValues[i] = 'X';
    }

    setSquaresValues(updatedSquaresValues);
    setOIsNext(!oIsNext);
  }

  const getWinner = () =>
    {
      const winningLines =
        [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
    
      for (let i = 0; i < winningLines.length; i++)
      {
        const [square1, square2, square3] = winningLines[i];
    
        if (squaresValues[square1] != null && squaresValues[square1] === squaresValues[square2] && squaresValues[square1] === squaresValues[square3])
        {
          return squaresValues[square1];
        }
      }
    
      return null;
    }

  const hasNullElements = array =>
  {
    return array.some(element => element == null);
  }

  const winner = getWinner(squaresValues);
  let message;

  if (winner != null)
  {
    message = winner + ' is the winner!';
  }
  else if (winner == null && hasNullElements(squaresValues) == false)
  {
    message = 'It\'s a draw';
  }
  else
  {
    message = (oIsNext ? 'O' : 'X') + ' turn';
  }

  const restartGame = () =>
    {
      const nullArray = Array(9).fill(null);
      setSquaresValues(nullArray);
      setOIsNext(false);
    }

  return (
    <>
      <h2 className='message'>{message}</h2>
      <section className="row">
        <Square squareValue={squaresValues[0]} onSquareClick={() => handleSquareClick(0)} />
        <Square squareValue={squaresValues[1]} onSquareClick={() => handleSquareClick(1)} />
        <Square squareValue={squaresValues[2]} onSquareClick={() => handleSquareClick(2)} />
      </section>
      <section className="row">
        <Square squareValue={squaresValues[3]} onSquareClick={() => handleSquareClick(3)} />
        <Square squareValue={squaresValues[4]} onSquareClick={() => handleSquareClick(4)} />
        <Square squareValue={squaresValues[5]} onSquareClick={() => handleSquareClick(5)} />
      </section>
      <section className="row">
        <Square squareValue={squaresValues[6]} onSquareClick={() => handleSquareClick(6)} />
        <Square squareValue={squaresValues[7]} onSquareClick={() => handleSquareClick(7)} />
        <Square squareValue={squaresValues[8]} onSquareClick={() => handleSquareClick(8)} />
      </section>
      <button onClick={restartGame}>Restart</button>
    </>
  )
}

export default TicTacToe;