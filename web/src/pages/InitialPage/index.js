import React from "react";
import Header from "../../components/Header";
import CalculatorImg from "../../assets/Calculator-rafiki.svg";

import "./styles.css";

function InitialPage() {
  return (
    <div className="initalPage-container">
      <img src={CalculatorImg} alt="calculator" />
      <Header />
    </div>
  );
}

export default InitialPage;
