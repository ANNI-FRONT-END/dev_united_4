import React, { useState, useContext } from "react";
import "./Header_home.css";
import { AppContext } from "../../context/AppContext";
import { collection, doc, setDoc, getFirestore } from "firebase/firestore";

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
    };

    await setDoc(referencia, tweetData);
  }

  return (
    <>
      <header>
        <section className="header">
          <img className="perfil_photo" src={userData.photo} alt="" />
          <img src="./img/bandera_log.png" alt="" />
          <img className="nombre" src="./img/devs_united.png" alt="" />
        </section>
      </header>
      <main>
        <section className="comentario">
          <div className="caja_escribir">
            <img src={userData.photo} alt="" />
            <input
              className="input"
              type="text"
              placeholder="What’s happening? "
              onChange={(e) => {
                setComentario(e.target.value);
              }}
            />
          </div>

          <button onClick={crearTweet}>POST</button>
        </section>
      </main>
    </>
  );
}
export default Header_home;
