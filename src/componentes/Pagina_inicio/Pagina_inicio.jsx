import React, { useState, useContext } from "react";
import "./Pagina_inicio.css";
import { AppContext } from "../../context/AppContext";
import Comentario from "../Comentario/Comentario";
import Header_home from "../Header_home/Header_home";

function Pagina_inicio() {
  const { userData, setUserData } = useContext(AppContext);

  return (
    <>
      <Header_home />
      <Comentario />
    </>
  );
}
export default Pagina_inicio;
