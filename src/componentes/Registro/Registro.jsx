import React, { useState, useContext } from "react";
import "./Registro.css";
import { Link } from "react-router-dom";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { AppContext } from "../../context/AppContext";
import LogoCompleto from "../../img/logo_completo.png";

function Registro() {
  const [username, setUsername] = useState("");
  const db = getFirestore();
  const { userData, setUserData } = useContext(AppContext);

  async function actualizarUsuario() {
    //referencia de usuario en la db(uid)
    const userRef = doc(db, "users", userData.uid);

    // Set the "capital" field of the city 'DC'
    await updateDoc(userRef, {
      color: "",
      username: username,
    });
    setUserData({
      ...userData,
      username: username,
    });
  }

  return (
    <section className="login">
      <section className="login-izq">
        <img src={LogoCompleto} alt="" />
      </section>
      <section className="login-der">
        <h1>
          WELCOME
          <br />
          <span className="rosado">NAME!</span>
        </h1>
        <input
          type="text"
          placeholder="Type your username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        {console.log(username)}
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
          <button className="continue" onClick={actualizarUsuario}>
            CONTINUE
          </button>
        </Link>
      </section>
    </section>
  );
}
export default Registro;
