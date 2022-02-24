import React, { useState, useContext } from "react";
import "./Comentario.css";
import { AppContext } from "../../context/AppContext";

function Comentario() {
  const { userData, setUserData } = useContext(AppContext);

  return (
    <>
      <section className="home_comentarios">
        <div className="comentarios">
          <img className="img_perfil" src="./img/img_perfil_otro.png" alt="" />
          <div>
            <div className="user_name_fecha">
              <h1 className="username">USERNAME</h1>
              <h3>- fecha</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <button className="btn_comentarios">
              <img height="13px" src="./img/Vector_corazon_blanco.png" alt="" />
            </button>
            <span>100</span>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
}
export default Comentario;
