import React, { useState, useContext, useEffect } from "react";
import "./Comentarios.css";
import { AppContext } from "../../context/AppContext";
import Comentario from "../Comentario/Comentario";

function Comentarios() {
  const { userData, setUserData, traerData, tweets } = useContext(AppContext);
  useEffect(() => {
    traerData();
  }, []);

  return (
    <>
      {console.log(tweets)}
      <section className="home_comentarios">
        {tweets.map((tweet) => {
          return <Comentario key={tweet.id} {...tweet} />;
        })}
      </section>
    </>
  );
}
export default Comentarios;
