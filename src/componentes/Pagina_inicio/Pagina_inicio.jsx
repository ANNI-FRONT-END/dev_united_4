import React from "react";
import "./Pagina_inicio.css";

function Pagina_inicio() {
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
      <section className="comentarios">
        <img src="./img/img_perfil_otro.png" alt="" />
        <div>
          <div>
            <h1>USERNAME</h1>
            <h3>- fecha</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <button>
            <img height="13px" src="./img/Vector_corazon_blanco.png" alt="" />
            <span>100</span>
          </button>
          <hr />
        </div>
      </section>
    </>
  );
}
export default Pagina_inicio;
