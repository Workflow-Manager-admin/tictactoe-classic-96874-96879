/**
 * Determines if there is a winner in the current board state
 * @param {Array} squares - The current board state (array of 9 elements)
 * @returns {string|null} - Returns 'X', 'O', or null
 */
export function calculateWinner(squares) {
  // All possible winning combinations (rows, columns, diagonals)
  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6], // diagonal top-right to bottom-left
  ];

  // Check each winning combination
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // If the squares at these positions are all the same (and not null)
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        winningLine: lines[i]
      };
    }
  }
  
  // If all squares are filled and no winner, it's a draw
  if (squares.every(square => square !== null)) {
    return { winner: 'draw', winningLine: null };
  }
  
  // No winner yet
  return { winner: null, winningLine: null };
}

/**
 * Determines if the game is a draw
 * @param {Array} squares - The current board state
 * @returns {boolean} - True if game is a draw
 */
export function isDraw(squares) {
  return squares.every(square => square !== null);
}
