import React from "react";
import "./PopUp.css";

function PopUp({ closePopUp, confirmarBorrarTweet }) {
  return (
    <div className="popUp_contenedor">
      <div className="contenedor">
        <h1> ¿ESTÁS SEGURO DE ELIMINAR ESTE TWEET?</h1>
        <div className="contenedor_btn">
          <button onClick={confirmarBorrarTweet}>SI</button>
          <button onClick={closePopUp}>NO</button>
        </div>
      </div>
    </div>
  );
}
export default PopUp;
