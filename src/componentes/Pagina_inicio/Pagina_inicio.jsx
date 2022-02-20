import React, { useState, useContext } from "react";
import "./Pagina_inicio.css";

function Pagina_inicio() {
  const [comentario, setComentario] = useState("");

  async function actualizarComenttario() {
    //referencia de usuario en la db(uid)
    const userRef = doc(db, "users", userData.uid);

    // Set the "capital" field of the city 'DC'
    await updateDoc(userRef, {
      color: "",
      username: username,
    });
  }

  return (
    <>
      <header>
        <section className="header">
          <img src="./img/profilePic.png" alt="" />
          <img src="./img/bandera_log.png" alt="" />
          <img className="nombre" src="./img/devs_united.png" alt="" />
        </section>
      </header>
      <main>
        <section className="comentario">
          <div className="caja_escribir">
            <img src="./img/profilePic.png" alt="" />
            <input
              className="input"
              type="text"
              placeholder="What’s happening? "
            />
          </div>

          <button>POST</button>
        </section>
      </main>
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
export default Pagina_inicio;
