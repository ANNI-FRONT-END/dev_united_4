import React from "react";
import "./Button_login.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../../firebase";
import { useNavigate } from "react-router-dom";

function ButtonLogin() {
  const auth = getAuth();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  function login() {
    try {
      signInWithPopup(auth, provider).then((userData) => {
        console.log(userData);
        navigate("/Registro");
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="login">
      <section className="login-izq">
        <img src="../../../img/logo_completo.png" alt="" />
      </section>
      <section className="login-der">
        <h1>
          LOREM <br />
          IPSUM DOLOR
        </h1>
        <p>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit
        </p>
        <button className="sign-in" onClick={login}>
          <div className="fondo-blanco">
            <img src="../../../img/logo_gmail.png" alt="" />
          </div>
          <span>Sign in with Google</span>
        </button>
      </section>
    </section>
  );
}

export default ButtonLogin;
