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
            <h1 className="username">{username} hola </h1>
            <h3>- {fecha} </h3>
          </div>
          <p>{comentario}</p>
          <button className="btn_like">
            <img height="13px" src="./img/Vector_corazon_blanco.png" alt="" />
          </button>
          <span>{likes.length}</span>

          <hr />
        </div>
        <button className="btn_vasura">
          <img height="13px" src="./img/Vector_basura.png" alt="" />
        </button>
      </div>
    </>
  );
}
export default Comentario;
