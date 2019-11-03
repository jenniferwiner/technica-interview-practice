/*
*  For solution in other languages:
* https://leetcode.com/problems/valid-sudoku/discuss/?currentPage=1&orderBy=hot&query=
*/

class Solution {
    isValidSudoku(board) {
        let rowMap = {};
        const colMaps = [];
        const boxMaps = [];
        let boxRowIdx;
        let boxCellIdx;
        let c;
        for (let i = 0; i < board.length; i++) {
            rowMap = {};
            for (let j = 0; j < board[i].length; j++) {
                c = board[i][j];
                if (c !== '.') {
                    //row check
                    rowMap[c] = (rowMap[c] || 0) + 1;
                    if (rowMap[c] > 1) {
                        return false;
                    }
                    //col check
                    colMaps[j] = colMaps[j] || {};
                    colMaps[j][c] = (colMaps[j][c] || 0) + 1;
                    if (colMaps[j][c] > 1) {
                        return false;
                    }
                    //3*3 check
                    boxRowIdx = Math.ceil((i + 1) / 3);
                    boxCellIdx = Math.ceil((j + 1) / 3);
                    boxMaps[boxRowIdx] = boxMaps[boxRowIdx] || {};
                    boxMaps[boxRowIdx][boxCellIdx] = boxMaps[boxRowIdx][boxCellIdx] || {};
                    boxMaps[boxRowIdx][boxCellIdx][c] = (boxMaps[boxRowIdx][boxCellIdx][c] || 0) + 1;
                    if (boxMaps[boxRowIdx][boxCellIdx][c] > 1) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}

const sol = new Solution();
const isValidSudoku = sol.isValidSudoku.bind(sol);
