import React from 'react';
import { useState } from 'react';

const Square = ({ squareValue, onSquareClick }) =>
{
    return (
        <button className="square" onClick={onSquareClick}>{squareValue}</button>
    )
}

export default Square;