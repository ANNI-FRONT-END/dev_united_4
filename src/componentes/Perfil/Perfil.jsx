import React, { useState, useContext } from "react";
import "./Perfil.css";
import { AppContext } from "../../context/AppContext";
import { collection, doc, setDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import Comentario from "../Comentario/Comentario";
import BtnIrAtras from "../../img/vector_ir_atras.png";
import BtnLogoOut from "../../img/vector_logout.png";

function Perfil() {
  const { userData, setUserData, tweets, setTweets } = useContext(AppContext);
  const posts = tweets.filter((tweet) => {
    return tweet.uidDueño === userData.uid;
  });

  const favoritos = tweets.filter((tweet) => {
    return tweet.likes.includes(userData.uid);
  });

  const [postOFavoritos, setPostOFavoritos] = useState(true);

  function cambiarTweets(value) {
    setPostOFavoritos(value);
  }

  return (
    <>
      <header>
        <section className="header">
          <Link id="link" to={"/Home"}>
            <button className="devolverse">
              <img src={BtnIrAtras} alt="" />
              <span className="header_username">{userData.username}</span>
            </button>
          </Link>

          <Link id="link" to={"/"}>
            <button className="logout">
              <span>LOGOUT</span>
              <img className="" src={BtnLogoOut} alt="" />
            </button>
          </Link>
        </section>
      </header>
      <main>
        <section className="perfil_usuario">
          <div className="perfil">
            <img src={userData.photo} alt="" />
            <span className="perfil_username">{userData.username}</span>
          </div>
          <div className="btn_perfil">
            <button
              className="btn_posts"
              onClick={() => {
                cambiarTweets(true);
              }}
            >
              POSTS
            </button>
            <button
              className="btn_favorites"
              onClick={() => {
                cambiarTweets(false);
              }}
            >
              FAVORITES
            </button>
          </div>
        </section>
      </main>
      <div className="tweets_contenedor">
        {postOFavoritos &&
          posts.map((post) => {
            return <Comentario {...post} key={post.id} />;
          })}

        {!postOFavoritos &&
          favoritos.map((favorito) => {
            return <Comentario {...favorito} key={favorito.id} />;
          })}
      </div>
    </>
  );
}
export default Perfil;
