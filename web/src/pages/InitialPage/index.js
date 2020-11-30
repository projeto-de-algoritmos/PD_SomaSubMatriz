import React, { useState, useEffect } from "react";
import Header from "../../components/Header";

import { Link } from "react-router-dom";

import "./styles.css";

function InitialPage() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("teste");
    if (counter == 10) {
      console.log("fimmm");
    }
  }, [counter]);

  return (
    <div>
      <Header />
      <h3>{counter}</h3>
      <div
        onClick={() => {
          setCounter(counter + 1);
        }}
        className="sum"
      >
        Somar
      </div>
    </div>
  );
}

export default InitialPage;
