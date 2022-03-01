import React, { useState } from "react";
import { createContext } from "react";
import { collection, doc, onSnapshot, getFirestore } from "firebase/firestore";

const AppContext = createContext(null);

function Context({ children }) {
  const db = getFirestore();
  const [userData, setUserData] = useState({
    color: "",
    photo: "",
    uid: "",
    username: "",
  });

  const [tweets, setTweets] = useState([]);

  const traerData = () => {
    onSnapshot(collection(db, "tweets"), (docs) => {
      const respuesta = [];
      docs.forEach((doc) => {
        respuesta.push(doc.data());
      });
      setTweets(respuesta);
    });
  };

  const value = { userData, setUserData, traerData, tweets };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, Context };
