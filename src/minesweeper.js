/*
  project:  minesweeper.js
  date:     10/26/18
  author:   Ronak Patel
*/

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {

  var board = [];

  for(let i = 0; i < numberOfRows; i++)
  {
    var row = [];
    for(let j = 0; j < numberOfColumns; j++)
    {
      row.push(' ');
    }
    board.push(row);
  }
  return board;

}


const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {

  var board = [];

  for(let i = 0; i < numberOfRows; i++)
  {
    var row = [];
    for(let j = 0; j < numberOfColumns; j++)
    {
      row.push(null);
    }
    board.push(row);
  }

  let numberOfBombsPlaced = 0;

  while(numberOfBombsPlaced < numberOfBombs)
  {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

    board[randomRowIndex][randomColumnIndex] = 'B';

    numberOfBombsPlaced++;
    //Can add bombs in the same index as a bomb
  }
  return board;
}

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);
