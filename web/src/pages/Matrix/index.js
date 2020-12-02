import React, { useState, useEffect } from "react";

import "./styles.css";

function Matrix() {
  const [matrixDimension, setMatrixDimension] = useState(0);
  const [matrixValues, setMatrixValues] = useState([]);

    useEffect(()=>{
      initMatrix();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[matrixDimension])

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

  const renderMatrix = () => {
    let matrix = [];
    if (matrixDimension > 0) {
      for (let i = 0; i < matrixDimension; i++) {
        let columns = [];
        for (let j = 0; j < matrixDimension; j++) {
          columns.push(
            <td id={`${i},${j}`} className="table-cell">
              <input
                defaultValue={matrixValues[i] && matrixValues[i][j]}
                type="number"
                onChange={(event)=>{
                  let newMatrix = [...matrixValues]; 
                  newMatrix[i][j] = Number(event.target.value); 
                  setMatrixValues(newMatrix)
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

          <button>Calcular</button>
        </div>

        <div className="sum-result">
          <h3>Soma da total da submatriz</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}

export default Matrix;
