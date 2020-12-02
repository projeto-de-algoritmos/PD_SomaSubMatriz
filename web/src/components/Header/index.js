import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

function Header() {
  const history = useHistory();

  return (
    <div className="header-container">
      <h2>Calcualdora de sub-matriz</h2>
      <p>
        Você informa a sua matriz e seus respectivos valores e te mostramos qual
        a submatriz que possui a maior soma entre seus valores.
      </p>
      <button
        onClick={() => {
          history.push("/matrix");
        }}
      >
        Começar
      </button>
    </div>
  );
}

export default Header;
