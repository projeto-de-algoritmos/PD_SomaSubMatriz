export function findMaxSumSubmatrix(matrix, dimension) {
    // S[i][j] stores sum of sub-matrix formed by row 0 to i-1
    // and column 0 to j-1
    matrix = [
        [1, -10, 5],
        [3, 4, 7],
        [5, 6, 9]
    ];
    dimension = 3
    let S = [];
    // Loop to create 2D array using 1D array 
    for (var i = 0; i <= dimension; i++) {
        S[i] = [];
    }

    // pre-process the matrix to fill S[][]
    for (let i = 0; i <= dimension; i++) {
        for (let j = 0; j <= dimension; j++) {
            if (i == 0 || j == 0)
                S[i][j] = 0;
            else
                S[i][j] = S[i - 1][j] + S[i][j - 1] - S[i - 1][j - 1] +
                    matrix[i - 1][j - 1];
        }
    }

    let maxSum = Math.min() * -1;
    let rowStart, rowEnd, colStart, colEnd;

    for (let i = 0; i < dimension; i++) {
        for (let j = i; j < dimension; j++) {
            for (let m = 0; m < dimension; m++) {
                for (let n = m; n < dimension; n++) {
                    let submatrix_sum = S[j + 1][n + 1] - S[j + 1][m] -
                        S[i][n + 1] + S[i][m];

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
    
    console.log( "Sub-matrix is formed by row " + rowStart + " to " + rowEnd
       + " and column from " + colStart + " to " + colEnd)

    return maxSum;
}

