import React, { useState, useContext } from "react";
import "./Header_home.css";
import { AppContext } from "../../context/AppContext";
import { collection, doc, setDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

function Header_home() {
  const { userData, setUserData } = useContext(AppContext);
  const [comentario, setComentario] = useState("");
  const db = getFirestore();

  async function crearTweet() {
    const referencia = doc(collection(db, "tweets"));
    const tweetData = {
      comentario: comentario,
      fecha: new Date().toDateString().slice(4, 10),
      id: referencia.id,
      photo: userData.photo,
      username: userData.username,
      likes: [],
      uidDueño: userData.uid,
    };

    await setDoc(referencia, tweetData);
    setComentario("");
  }

  return (
    <>
      <header>
        <section className="header">
          <Link to={"/Perfil"}>
            <img className="perfil_photo" src={userData.photo} alt="" />
          </Link>
          <img src="../../img/bandera_log.png" alt="" />
          <img className="nombre" src="../../img/devs_united.png" alt="" />
        </section>
      </header>
      <main>
        <section className="comentario">
          <div className="caja_escribir">
            <img src={userData.photo} alt="" />
            <textarea
              className="input"
              placeholder="What’s happening? "
              onChange={(e) => {
                setComentario(e.target.value);
              }}
              value={comentario}
            />
          </div>

          <button onClick={crearTweet}>POST</button>
        </section>
      </main>
    </>
  );
}
export default Header_home;
