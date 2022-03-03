import React, { useState, useContext, useEffect } from "react";
import "./Pagina_inicio.css";
import { AppContext } from "../../context/AppContext";
import Comentarios from "../Comentarios/Comentarios";
import Header_home from "../Header_home/Header_home";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function Pagina_inicio() {
  const { userData, setUserData } = useContext(AppContext);
  const db = getFirestore();
  useEffect(async () => {
    //la referencia(trae la info/dirección) a el usuario que hizo login(uid)
    const userRef = doc(db, "users", userData.uid);
    //si realmente es donde llamamos la data
    const userSnap = await getDoc(userRef);
    setUserData({
      ...userSnap.data(),
    });
  }, []);

  return (
    <>
      <Header_home />
      <Comentarios />
    </>
  );
}
export default Pagina_inicio;
