import React from 'react';
import './Square.css';

/**
 * Square component represents a single cell in the Tic-Tac-Toe grid
 */
const Square = ({ value, onClick, isWinningSquare }) => {
  const squareClass = `square ${isWinningSquare ? 'winning' : ''} ${value ? 'filled' : ''}`;
  
  return (
    <button 
      className={squareClass}
      onClick={onClick}
      disabled={value !== null}
    >
      {value}
    </button>
  );
};

export default Square;
