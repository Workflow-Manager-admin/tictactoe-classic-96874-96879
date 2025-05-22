import React from 'react';
import Square from '../Square/Square';
import './Board.css';

/**
 * Board component renders the 3x3 grid of Square components
 */
const Board = ({ squares, onClick, winningLine }) => {
  const renderSquare = (i) => {
    const isWinningSquare = winningLine && winningLine.includes(i);
    
    return (
      <Square 
        key={i}
        value={squares[i]} 
        onClick={() => onClick(i)}
        isWinningSquare={isWinningSquare}
      />
    );
  };

  // Create a 3x3 grid of squares
  return (
    <div className="board">
      {[0, 1, 2].map(row => (
        <div key={row} className="board-row">
          {[0, 1, 2].map(col => renderSquare(row * 3 + col))}
        </div>
      ))}
    </div>
  );
};

export default Board;
