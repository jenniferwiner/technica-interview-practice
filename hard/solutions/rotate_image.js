/*
* For solutions in other languages:
* https://leetcode.com/problems/rotate-image/discuss/?currentPage=1&orderBy=hot&query=
*/

var rotate = function(matrix) {
  const mLen = matrix.length;
  const len = mLen - 1;

  for (let i = 0; i <= len / 2 ; i++) {
    for (let j = 0; j < len / 2; j++) {
      rotateCircle(matrix, i, j);
    }
  }

  function rotateCircle(matrix, i, j) {
    const first = matrix[i][j];
    const second = matrix[j][len - i];
    const third = matrix[len - i][len - j];
    const forth = matrix[len - j][i];
    matrix[i][j] = forth;
    matrix[j][len - i] = first;
    matrix[len - i][len - j] = second;
    matrix[len - j][i] = third;
  }
};
