import React, { useState } from "react";
import Board from "./Board";

function calculateWinner(board) {
  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let index = 0; index < winningPositions.length; index++) {
    const [a, b, c] = winningPositions[index]; // index = 1 a:3,b:4,c:5
    if (board[a] && board[a] === board[b] && board[a] === board[c] && board[a] === 'X') {
      return 'X';
    } else if(board[a] && board[a] === board[b] && board[a] === board[c] && board[a] === 'O'){
      return 'O'
    }
  }

  return null;
}

const Game = () => {
  const [board, setBoard] = useState(new Array(9).fill(null)); // null, "X", "O"
  const [xIsNext, setXIsNext] = useState(true);
  let winner = calculateWinner(board);
  const [whoWins, setWinner] = useState(null);
  const [stories, setStory] = useState('');

  const Restart = () => {
    const copiedBoard = [...board];
    copiedBoard.fill(null);
    setBoard(copiedBoard);
    setXIsNext(true);
    setWinner(null);
    setStory('');
  }

  const handleSquareChange = (index) => {
    const copiedBoard = [...board];
    if (copiedBoard[index] || winner != null){
      return;
    } 

    copiedBoard[index] = xIsNext ? "X" : "O";
    let story = stories;
    let sign = xIsNext ? "X" : "O";
    story = stories + " -> " + sign + " in " + index;
    setStory(story);
    setXIsNext(!xIsNext);
    setBoard(copiedBoard);
    winner = calculateWinner(copiedBoard);
    if(winner === 'O'){
      setWinner('O wins');
    } else if(winner === 'X'){
      setWinner('X wins');
    }
  };


  return (
    <div className="row">
      <div className="col-8">
        <p>Next Turn: {(xIsNext) ? 'X' : 'O'}</p>
        <Board squares={board} handleClick={handleSquareChange} />
        <button onClick={Restart}>Restart</button>  
        <p className="whoWins">{whoWins}</p>
      </div>
      <div>
        <p>{stories}</p>
      </div>
    </div>
  );
};

export default Game;
