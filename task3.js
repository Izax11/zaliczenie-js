// funkcja rekurencyjna
function solveSudoku(grid) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j] === 0) {
          for (let k = 1; k <= 9; k++) {
            if (isValid(grid, i, j, k)) {
              grid[i][j] = k;
              if (solveSudoku(grid)) {
                return true;
              } else {
                grid[i][j] = 0;
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  
  function isValid(grid, row, col, k) {
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === k || grid[i][col] === k) {
        return false;
      }
    }
    let boxRowStart = Math.floor(row / 3) * 3;
    let boxColStart = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[boxRowStart + i][boxColStart + j] === k) {
          return false;
        }
      }
    }
    return true;
  }
  
  let grid = [[5, 3, 0, 0, 7, 0, 0, 0, 0],
              [6, 0, 0, 1, 9, 5, 0, 0, 0],
              [0, 9, 8, 0, 0, 0, 0, 6, 0],
              [8, 0, 0, 0, 6, 0, 0, 0, 3],
              [4, 0, 0, 8, 0, 3, 0, 0, 1],
              [7, 0, 0, 0, 2, 0, 0, 0, 6],
              [0, 6, 0, 0, 0, 0, 2, 8, 0],
              [0, 0, 0, 4, 1, 9, 0, 0, 5],
              [0, 0, 0, 0, 8, 0, 0, 7, 9]];
  
  if (solveSudoku(grid)) {
    console.log("Rozwiązanie sudoku:");
    for (let i = 0; i < 9; i++) {
      console.log(grid[i]);
    }
  }
