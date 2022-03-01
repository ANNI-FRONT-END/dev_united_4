import React, { useState, useContext } from "react";
import "./Perfil.css";
import { AppContext } from "../../context/AppContext";
import { collection, doc, setDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

function Perfil() {
  return (
    <>
      <header>
        <section className="header">
          <button className="devolverse">
            <img src="./img/vector_ir_atras.png" alt="" />
            <span className="header_username">USERNAME</span>
          </button>
          <Link id="link" to={"/"}>
            <button className="logout">
              <span>LOGOUT</span>
              <img className="" src="./img/vector_logout.png" alt="" />
            </button>
          </Link>
        </section>
      </header>
      <main>
        <section className="perfil_usuario">
          <div className="perfil">
            <img src="./img/profilePic.png" alt="" />
            <span>USERNAME</span>
          </div>
          <div className="btn_perfil">
            <button className="btn_posts">POSTS</button>
            <button className="btn_favorites">FAVORITES</button>
          </div>
        </section>
      </main>
    </>
  );
}
export default Perfil;
