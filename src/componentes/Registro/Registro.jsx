import React from "react";
import "./Registro.css";
import { Link } from "react-router-dom";

function Registro() {
  return (
    <section className="login">
      <section className="login-izq">
        <img src="./img/logo_completo.png" alt="" />
      </section>
      <section className="login-der">
        <h1>
          WELCOME
          <br />
          <span className="rosado">NAME!</span>
        </h1>
        <input type="text" placeholder="Type your username" />
        <p>Select your favorite color</p>
        <div className="colores">
          <button className="pink"></button>
          <button className="naranja"></button>
          <button className="amarillo"></button>
          <button className="verde"></button>
          <button className="azul"></button>
          <button className="morado"></button>
        </div>
        <Link to="/Home" className="link">
          <button className="continue">CONTINUE</button>
        </Link>
      </section>
    </section>
  );
}
export default Registro;
