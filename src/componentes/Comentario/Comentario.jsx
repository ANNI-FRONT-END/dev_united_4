import React, { useState, useContext } from "react";
import "./Comentario.css";
import { AppContext } from "../../context/AppContext";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";

function Comentario({
  comentario,
  fecha,
  id,
  likes,
  photo,
  username,
  uidDueño,
}) {
  const { userData, setUserData } = useContext(AppContext);
  const db = getFirestore();

  async function borrarTweet(id) {
    try {
      await deleteDoc(doc(db, "tweets", id));
    } catch (e) {
      console.log("Error al borrar el post", e);
    }
  }

  return (
    <>
      <div className="comentarios">
        <img className="img_perfil" src={photo} alt="" />
        <div>
          <div className="user_name_fecha">
            <h1 className="username">{username} </h1>
            <h3>- {fecha} </h3>
          </div>
          <p className="comentario_contenido">{comentario}</p>
          <button className="btn_like">
            <img height="13px" src="./img/Vector_corazon_blanco.png" alt="" />
          </button>
          <span>{likes.length}</span>

          <hr />
        </div>
        {uidDueño === userData.uid && (
          <button
            className="btn_basura"
            onClick={() => {
              borrarTweet(id);
            }}
          >
            <img height="13px" src="./img/Vector_basura.png" alt="" />
          </button>
        )}
      </div>
    </>
  );
}
export default Comentario;
