import React, { useState, useContext } from "react";
import "./Comentario.css";
import { AppContext } from "../../context/AppContext";

function Comentario({ comentario, fecha, id, likes, photo, username }) {
  const { userData, setUserData } = useContext(AppContext);

  return (
    <>
      <div className="comentarios">
        <img className="img_perfil" src={photo} alt="" />
        <div>
          <div className="user_name_fecha">
            <h1 className="username">{username} </h1>
            <h3>{fecha} </h3>
          </div>
          <p>{comentario}</p>
          <button className="btn_comentarios">
            <img height="13px" src="./img/Vector_corazon_blanco.png" alt="" />
          </button>
          <span>{likes.length}</span>
          <hr />
        </div>
      </div>
    </>
  );
}
export default Comentario;
