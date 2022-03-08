import React, { useState, useContext } from "react";
import "./Comentario.css";
import { AppContext } from "../../context/AppContext";
import VectorCorazonRojo from "../../img/Vector_corazon_rojo.png";
import VectorCorazonBlanco from "../../img/Vector_corazon_blanco.png";
import VectorBasura from "../../img/Vector_basura.png";
import {
  deleteDoc,
  doc,
  getFirestore,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

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
  //esta el like de la persona que hizo login en los likes del tweet ?
  const isUidDueñoinlikes = likes.includes(userData.uid);
  const imgBtnLike = isUidDueñoinlikes
    ? VectorCorazonRojo
    : VectorCorazonBlanco;

  async function borrarTweet(id) {
    try {
      await deleteDoc(doc(db, "tweets", id));
    } catch (e) {
      console.log("Error al borrar el post", e);
    }
  }
  async function setLike() {
    const comentarioRef = doc(db, "tweets", id);
    const uidLogin = userData.uid;

    if (isUidDueñoinlikes === true) {
      const newLikes = likes.filter((like) => {
        return like !== uidLogin;
      });

      // borrar like
      await updateDoc(comentarioRef, {
        likes: newLikes,
      });
    } else {
      // agregar like
      await updateDoc(comentarioRef, {
        likes: [...likes, uidLogin],
      });
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
          <button className="btn_like" onClick={setLike}>
            <img height="13px" src={imgBtnLike} alt="" />
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
            <img height="13px" src={VectorBasura} alt="" />
          </button>
        )}
      </div>
    </>
  );
}
export default Comentario;
