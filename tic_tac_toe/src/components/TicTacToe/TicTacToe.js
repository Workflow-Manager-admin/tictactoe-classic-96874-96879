import React, { useState, useEffect } from 'react';
import Board from '../Board/Board';
import { calculateWinner } from '../../utils/gameLogic';
import './TicTacToe.css';

/**
 * TicTacToe is the main container component for the game
 * It manages the game state and renders the board
 */
const TicTacToe = () => {
  // Game state
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [gameStatus, setGameStatus] = useState('');
  
  // Current board state
  const current = history[stepNumber];
  
  // Get winner info (if any)
  const { winner, winningLine } = calculateWinner(current.squares);
  
  // Update game status message when game state changes
  useEffect(() => {
    if (winner === 'draw') {
      setGameStatus("Game ended in a draw!");
    } else if (winner) {
      setGameStatus(`Winner: ${winner}`);
    } else {
      setGameStatus(`Next player: ${xIsNext ? 'X' : 'O'}`);
    }
  }, [winner, xIsNext]);

  // Handle square click
  const handleClick = (i) => {
    // If game is over or square is already filled, do nothing
    if (winner || current.squares[i]) {
      return;
    }
    
    // Create a new copy of the squares array with the new move
    const squares = current.squares.slice();
    squares[i] = xIsNext ? 'X' : 'O';
    
    // Update game history
    setHistory(history.slice(0, stepNumber + 1).concat([{ squares }]));
    setStepNumber(stepNumber + 1);
    setXIsNext(!xIsNext);
  };

  // Reset the game
  const resetGame = () => {
    setHistory([{ squares: Array(9).fill(null) }]);
    setStepNumber(0);
    setXIsNext(true);
  };

  return (
    <div className="tic-tac-toe">
      <h1 className="game-title">Tic-Tac-Toe</h1>
      
      <div className="game-status">{gameStatus}</div>
      
      <Board 
        squares={current.squares} 
        onClick={handleClick} 
        winningLine={winningLine}
      />
      
      <button className="btn reset-button" onClick={resetGame}>
        New Game
      </button>
    </div>
  );
};

export default TicTacToe;
