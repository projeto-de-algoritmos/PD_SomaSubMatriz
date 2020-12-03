export function findMaxSumSubmatrix(matrix, dimension) {
  let S = [];
  for (var i = 0; i <= dimension; i++) {
    S[i] = [];
  }

  for (let i = 0; i <= dimension; i++) {
    for (let j = 0; j <= dimension; j++) {
      if (i == 0 || j == 0) S[i][j] = 0;
      else
        S[i][j] =
          S[i - 1][j] + S[i][j - 1] - S[i - 1][j - 1] + matrix[i - 1][j - 1];
    }
  }

  let maxSum = Math.min() * -1;
  let rowStart, rowEnd, colStart, colEnd;

  for (let i = 0; i < dimension; i++) {
    for (let j = i; j < dimension; j++) {
      for (let m = 0; m < dimension; m++) {
        for (let n = m; n < dimension; n++) {
          let submatrix_sum =
            S[j + 1][n + 1] - S[j + 1][m] - S[i][n + 1] + S[i][m];

          if (submatrix_sum > maxSum) {
            maxSum = submatrix_sum;
            rowStart = i;
            rowEnd = j;
            colStart = m;
            colEnd = n;
          }
        }
      }
    }
  }

  return { sum: maxSum, result: { rowStart, rowEnd, colStart, colEnd } };
}
