import React, { useState, useEffect } from "react";
import { findMaxSumSubmatrix } from "../../utils/maxSubmatrix";
import "./styles.css";

function Matrix() {
  const [matrixDimension, setMatrixDimension] = useState(0);
  const [matrixValues, setMatrixValues] = useState([]);
  const [calculousResult, setCalculousResult] = useState({});

  useEffect(() => {
    initMatrix();
    setCalculousResult({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matrixDimension]);

  useEffect(() => {
    console.log(calculousResult);
  }, [calculousResult]);

  const initMatrix = () => {
    let newMatrix = [];
    for (let i = 0; i < matrixDimension; i++) {
      let newColumns = [];
      for (let j = 0; j < matrixDimension; j++) {
        newColumns.push(0);
      }
      newMatrix.push(newColumns);
    }
    setMatrixValues(newMatrix);
  };

  const getMatrixClass = (i, j) => {
    const hasCalculous = calculousResult.sum;
    if (!hasCalculous) return "table-cell";

    if (
      i >= calculousResult.result.rowStart &&
      i <= calculousResult.result.rowEnd &&
      j >= calculousResult.result.colStart &&
      j <= calculousResult.result.colEnd
    )
      return "table-cell-selected";
    else return "table-cell";
  };

  const renderMatrix = () => {
    let matrix = [];
    if (matrixDimension > 0) {
      for (let i = 0; i < matrixDimension; i++) {
        let columns = [];
        for (let j = 0; j < matrixDimension; j++) {
          columns.push(
            <td className={getMatrixClass(i, j)}>
              <input
                defaultValue={matrixValues[i] && matrixValues[i][j]}
                type="number"
                onChange={(event) => {
                  let newMatrix = [...matrixValues];
                  newMatrix[i][j] = Number(event.target.value);
                  setMatrixValues(newMatrix);
                }}
              />
            </td>
          );
        }
        matrix.push(<tr>{columns}</tr>);
      }

      return (
        <div className="matrix">
          <table>
            <tbody>{matrix}</tbody>
          </table>
        </div>
      );
    }
  };

  return (
    <div className="matrix-container">
      <h2>Calculadora</h2>
      <p>
        Informe o tamanho de sua matriz no campo abaixo, preencha cada célula e
        pressione em calcular.
      </p>
      <div className="matrix-content">
        {renderMatrix()}
        <div className="matrix-input">
          <label htmlFor="dimension">Qual a dimensão de sua matriz?</label>
          <input
            value={matrixDimension}
            type="number"
            id="dimension"
            onChange={(event) => {
              if (event.target.value <= 20)
                setMatrixDimension(event.target.value);
            }}
          />

          <button
            onClick={() =>
              setCalculousResult(
                findMaxSumSubmatrix(matrixValues, matrixDimension)
              )
            }
          >
            Calcular
          </button>
        </div>

        <div className="sum-result">
          <h3>Soma da total da submatriz</h3>
          <p>{calculousResult.sum || 0}</p>
        </div>
      </div>
    </div>
  );
}

export default Matrix;
